import chalk from 'chalk';
import path from 'path';
import fs from 'fs';

const git = require('simple-git')();
const { version } = require('../../../../package.json');

// export const generateAllChangelogs = c => new Promise((resolve, reject) => {
//       git.tags([], (e, s) => {
//           s.all.forEach((tag, i) => {
//             if(s.all[i + 1]) {
//               git.log(tag, s.all[i + 1], (e, log) => {
//                   log.all.forEach(v => {
//                       const ss = v.message;
//                       logs += `- ${ss}\n`;
//                   });
//               })
//             }
//
//           });
//
//
//       })
// })

export const generateChangelog = c => new Promise((resolve, reject) => {
    console.log('CHANGELOG');
    const d = new Date();
    let logs = '';

    git.tags([], (e, s) => {
        const latestTag = s.latest;
        // if (s.latest === version) {
        //     s.all.pop();
        //     latestTag = s.all.pop();
        // }
        git.log(latestTag, 'HEAD', (e, log) => {
            // log.all.pop();
            // log.all.pop();
            log.all.forEach((v) => {
                const ss = v.message;
                logs += `- ${ss}\n`;
            });

            const changelog = `## v${version} (${d.getFullYear()}-${d.getMonth()
                    + 1}-${d.getDate()})

### Fixed

${logs}
### Added Features

- none

### Breaking Changes

- none

`;
            console.log(changelog.replace(/\*\*/g, '*'));
            fs.writeFileSync(
                path.join(c.paths.project.dir, '../../docs/changelog', `${version}.md`),
                changelog
            );
            resolve();
        });
    });
});

const getVersionNumber = (vrs) => {
    const verArr = vrs.split('-');
    const verMainArr = verArr[0].split('.');
    const verAlpha1 = verArr[1] ? verArr[1].split('.')[1] : '00';
    const verMajor = verMainArr[0].length < 2 ? `0${verMainArr[0]}` : verMainArr[0];
    const verMinor = verMainArr[1].length < 2 ? `0${verMainArr[1]}` : verMainArr[1];
    const verPath = verMainArr[2].length < 2 ? `0${verMainArr[2]}` : verMainArr[2];
    const verAlpha = verAlpha1.length < 2 ? `0${verAlpha1}` : verAlpha1;

    const output = `${verMajor}${verMinor}${verPath}${verAlpha}`;
    return parseInt(output);
};

export const generateCombinedChangelog = async (c) => {
    const chlogDirPath = path.join(c.paths.project.dir, '../../docs/changelog');
    const chlogCombinedPath = path.join(c.paths.project.dir, '../../docs/changelog.md');

    let output = `---
id: changelog
title: Changelog
sidebar_label: Changelog
---
\n`;

    const chlogArr = fs.readdirSync(chlogDirPath);
    const chlogArrObj = chlogArr.map((v) => {
        const vers = v.split('-');
        const versionNumber = getVersionNumber(v);
        return {
            version: vers[0],
            patch: vers[1],
            versionNumber,
            value: v
        };
    });
    chlogArrObj.sort((x, y) => y.versionNumber - x.versionNumber);
    chlogArrObj.forEach((chlog) => {
        const chlogPath = path.join(chlogDirPath, chlog.value);

        const chlogVal = fs.readFileSync(chlogPath);

        output += `\n${chlogVal}`;
    });

    fs.writeFileSync(
        chlogCombinedPath,
        output
    );
};
