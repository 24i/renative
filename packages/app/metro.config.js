const blacklist = require('metro-config/src/defaults/blacklist');
const path = require('path');
const { doResolve } = require('rnv');

const defaultConfig = {
    resolver: {
        blacklistRE: blacklist([
            /platformBuilds\/.*/,
            /buildHooks\/.*/,
            /projectConfig\/.*/,
            /appConfigs\/.*/,
            /renative.local.*/,
            /metro.config.local.*/,
            /platformBuilds\/.*/,
            /buildHooks\/.*/,
            /projectConfig\/.*/,
            /website\/.*/,
            /appConfigs\/.*/,
            /renative.local.*/,
            /metro.config.local.*/
        ]),
        extraNodeModules: {
            'react-native': doResolve('react-native'),
            'react-navigation': doResolve('react-navigation'),
            renative: doResolve('renative')
        }
    },
    watchFolders: [
        path.resolve(__dirname, '../../node_modules'),
        path.resolve(__dirname, './node_modules'),
        path.resolve(__dirname, '../'),
        path.resolve(__dirname)
    ],
    projectRoot: path.resolve(__dirname, 'entry')
};

module.exports = defaultConfig;
