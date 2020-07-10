/* eslint-disable import/no-cycle */
import path from 'path';
import fs from 'fs';
import chalk from 'chalk';
import open from 'better-opn';
import { executeAsync } from '../../systemTools/exec';
import {
    checkPortInUse,
    getConfigProp,
    waitForWebpack,
    confirmActiveBundler
} from '../../common';
import { logTask, logInfo, logWarning, logDebug } from '../../systemTools/logger';
import { NEXT_CONFIG_NAME } from '../../constants';
import { selectWebToolAndDeploy, selectWebToolAndExport } from '../../deployTools/webTools';
import { writeCleanFile, cleanFolder, copyFileSync, copyFolderRecursiveSync, fsWriteFileSync } from '../../systemTools/fileutils';

const configureNextIfRequired = async (c) => {
    const { platformTemplatesDirs, dir } = c.paths.project;
    const publicDir = path.join(dir, 'public');
    const baseFontsDir = c.paths.appConfig.fontDirs?.[0];
    const stylesDir = path.join(dir, 'styles');
    const pagesDir = path.resolve(getConfigProp(c, c.platform, 'pagesDir') || 'src/app');
    const _appFile = path.join(pagesDir, '_app.js');
    const platformTemplateDir = path.join(platformTemplatesDirs[c.platform], `_${c.platform}`);
    const configFile = path.join(dir, NEXT_CONFIG_NAME);

    // handle fonts
    !fs.existsSync(publicDir) && fs.mkdirSync(publicDir);
    const fontsSymLinkPath = path.join(publicDir, 'fonts');

    if (fs.existsSync(baseFontsDir)) {
        if (!fs.existsSync(fontsSymLinkPath)) {
            try {
                fs.unlinkSync(fontsSymLinkPath);
            } catch (e) {
                logDebug(e);
            }
            fs.symlinkSync(baseFontsDir, fontsSymLinkPath);
        }

        // create styles dir and global fonts.css file
        if (!fs.existsSync(stylesDir)) {
            fs.mkdirSync(stylesDir);
            let cssOutput = '';

            const fontFiles = fs.readdirSync(baseFontsDir);
            fontFiles.forEach((file) => {
                cssOutput += `
                  @font-face {
                      font-family: '${file.split('.')[0]}';
                      src: url('/fonts/${file}');
                  }

              `;
            });

            fsWriteFileSync(path.join(stylesDir, 'fonts.css'), cssOutput);
        }
    }


    // add wrapper _app
    if (!fs.existsSync(_appFile)) {
        if (!fs.existsSync(pagesDir)) {
            fs.mkdirSync(pagesDir);
        }
        writeCleanFile(path.join(platformTemplateDir, '_app.js'), _appFile, [{ pattern: '{{FONTS_CSS}}', override: path.relative(pagesDir, path.resolve('styles/fonts.css')).replace(/\\/g, '/') }], null, c);
    }

    // add config
    if (!fs.existsSync(configFile)) {
        writeCleanFile(path.join(platformTemplateDir, NEXT_CONFIG_NAME), configFile, null, null, c);
    }
};

export const runWebNext = async (c, platform, port) => {
    logTask(`runWebNext:${platform}:${port}`);
    await configureNextIfRequired(c);

    const devServerHost = c.runtime.localhost;

    const isPortActive = await checkPortInUse(c, platform, port);

    if (!isPortActive) {
        logInfo(
            `Looks like your ${chalk.white(platform)} devServerHost ${chalk.white(devServerHost)} at port ${chalk.white(
                port
            )} is not running. Starting it up for you...`
        );
        await _runWebBrowser(c, platform, devServerHost, port, false);
        await runWebDevServer(c, platform, port);
    } else {
        await confirmActiveBundler(c);
        await _runWebBrowser(c, platform, devServerHost, port, true);
    }
};

const _runWebBrowser = (c, platform, devServerHost, port, alreadyStarted) => new Promise((resolve) => {
    logTask(`_runWebBrowser:${platform}:${devServerHost}:${port}:${c.runtime.shouldOpenBrowser}`);
    if (!c.runtime.shouldOpenBrowser) return resolve();
    const wait = waitForWebpack(c, 'next')
        .then(() => {
            open(`http://${devServerHost}:${port}/`);
        })
        .catch((e) => {
            logWarning(e);
        });
    if (alreadyStarted) return wait; // if it's already started, return the promise so it rnv will wait, otherwise it will exit before opening the browser
    return resolve();
});

// @TODO move this to a better place?
const exportDynamic = async (c) => {
    const { dir } = c.paths.project;
    const pagesDir = getConfigProp(c, c.platform, 'pagesDir');
    // @TODO remove/clean -> mkdirp this 'dynamic' folder
    const dest = `./platformBuilds/${c.runtime.appId}_${c.platform}/dynamic`;
    await cleanFolder(dest);
    // @TODO merge these folder/files
    // @TODO add an exportOptions.additionalFiles config var?
    const nextFolders = [
        'node_modules',
        '.next',
        [pagesDir, `${dest}/pages`],
    ];
    const nextFiles = [
        'package.json',
    ];

    nextFiles.forEach((file) => {
        copyFileSync(`${dir}/${file}`, `${dest}/${file}`);
    });

    nextFolders.forEach((file) => {
        if (Array.isArray(file)) {
            copyFolderRecursiveSync(file[0], file[1]);
        } else {
            copyFolderRecursiveSync(`${dir}/${file}`, `${dest}/${file}`);
        }
    });
};

const exportNext = async (c) => {
    logTask('exportWebNext');
    await configureNextIfRequired(c);
    const env = getConfigProp(c, c.platform, 'environment');
    const method = getConfigProp(c, c.platform, 'exportOptions')?.method || 'static';
    const pagesDir = getConfigProp(c, c.platform, 'pagesDir');
    if (!pagesDir) logWarning(`You're missing ${c.platform}.pagesDir config. Defaulting to 'src/app'`);

    if (method === 'dynamic') {
        return exportDynamic(c); //
    }

    return executeAsync(c, `npx next export ./platformBuilds/${c.runtime.appId}_${c.platform} --pagesDir ${pagesDir || 'src/app'}`, { ...process.env, env: { NODE_ENV: env || 'development' }, interactive: true });
};

export const buildWebNext = async (c) => {
    logTask('buildWebNext');
    await configureNextIfRequired(c);
    const env = getConfigProp(c, c.platform, 'environment');
    const pagesDir = getConfigProp(c, c.platform, 'pagesDir');
    if (!pagesDir) logWarning(`You're missing ${c.platform}.pagesDir config. Defaulting to 'src/app'`);

    await executeAsync(c, `npx next build ./platformBuilds/${c.runtime.appId}_${c.platform} --pagesDir ${pagesDir || 'src/app'}`, { ...process.env, env: { NODE_ENV: env || 'development' }, interactive: true });
    return exportNext(c);
};

export const runWebDevServer = (c, platform, port) => {
    logTask(`runWebDevServer:${platform}`);
    const env = getConfigProp(c, platform, 'environment');
    const pagesDir = getConfigProp(c, platform, 'pagesDir');
    if (!pagesDir) logWarning(`You're missing ${platform}.pagesDir config. Defaulting to 'src/app'`);

    return executeAsync(c, `npx next --pagesDir ${pagesDir || 'src/app'} --port ${port}`, { env: { NODE_ENV: env || 'development' }, interactive: true });
};

export const deployWebNext = (c, platform) => {
    logTask(`deployWeb:${platform}`);
    return selectWebToolAndDeploy(c, platform);
};

export const exportWebNext = (c, platform) => {
    logTask(`exportWeb:${platform}`);
    return selectWebToolAndExport(c, platform);
};
