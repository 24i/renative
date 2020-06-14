// PLATFORM
export const ANDROID = 'android';
export const ANDROID_AUTO = 'androidauto';
export const ANDROID_TV = 'androidtv';
export const ANDROID_WEAR = 'androidwear';
export const ALEXA = 'alexa';
export const APPLE_AUTO = 'appleauto';
export const ASTIAN = 'astian';
export const BLACKBERRY = 'blackberry';
export const CHROMECAST = 'chromecast';
export const CHROME_OS = 'chromeos';
export const FIREFOX_OS = 'firefoxos';
export const FIREFOX_TV = 'firefoxtv';
export const FIRE_OS = 'fireos';
export const FIRE_TV = 'firetv';
export const HBBTV = 'hbbtv';
export const IOS = 'ios';
export const KAIOS = 'kaios';
export const MACOS = 'macos';
export const MEEGO = 'meego';
export const NETCAST = 'netcast';
export const OCCULUS = 'occulus';
export const ORSAY = 'orsay';
export const PS4 = 'ps4';
export const ROKU = 'roku';
export const SAILFISH = 'sailfish';
export const TIVO = 'tivo';
export const TIZEN = 'tizen';
export const TIZEN_WATCH = 'tizenwatch';
export const TIZEN_MOBILE = 'tizenmobile';
export const TVOS = 'tvos';
export const UBUNTU = 'ubuntu';
export const UBUNTU_TOUCH = 'ubuntutouch';
export const UNITY = 'unity';
export const VEWD = 'vewd';
export const VIDAA = 'vidaa';
export const VIERACONNECT = 'vieraconnect';
export const VIZIO = 'vizio';
export const WATCHOS = 'watchos';
export const WEB = 'web';
export const WEBOS = 'webos';
export const WEBIAN = 'webian';
export const WII = 'wii';
export const WINDOWS = 'windows';
export const WP10 = 'wp10';
export const WP8 = 'wp8';
export const XBOX = 'xbox';
export const XBOX360 = 'xbox360';
export const WEB_NEXT = 'web-next';
// Kodi, Boxee, HorizonTV, Mediaroom(Ericsson), YahooSmartTV, Slingbox, Hololens, Occulus, GearVR, WebVR

export const ICONS = {
    PHONE: '📱',
    AUTO: '🚗',
    TV: '📺',
    CONSOLE: '🎮',
    WATCH: '⌚',
    DESKTOP: '🖥️ ',
    BROWSER: '🌐',
    VOICE: '📢',
    SERVICE: '☁️'
};

export const OS_WINDOWS = 'windows';
export const OS_MAC = 'mac';
export const OS_LINUX = 'linux';

export const OS = {
    ALL: [OS_MAC, OS_WINDOWS, OS_LINUX],
    MAC_ONLY: [OS_MAC],
    WINDOWS_ONLY: [OS_WINDOWS],
    LINUX_ONLY: [OS_LINUX]
};

export const PLATFORMS = {
    // ACTIVE
    web: {
        defaultPort: 8080,
        icon: ICONS.BROWSER,
        supportedOS: OS.ALL,
        isActive: true,
        requiresSharedConfig: true,
        sourceExts: {
            factors: ['browser.js', 'browser.ts'],
            platforms: ['web.js', 'web.ts'],
            fallbacks: ['mjs', 'js', 'tsx', 'ts']
        }
    },
    'web-next': {
        defaultPort: 8100,
        icon: ICONS.BROWSER,
        supportedOS: OS.ALL,
        isActive: true,
        requiresSharedConfig: true,
        sourceExts: {
            factors: ['browser.js', 'browser.ts'],
            platforms: ['server.next.js', 'server.next.ts', 'next.js', 'next.ts'],
            fallbacks: ['server.web.js', 'server.web.ts', 'web.js', 'web.ts', 'mjs', 'js', 'jsx', 'json', 'wasm', 'tsx', 'ts']
        }
    },
    ios: {
        defaultPort: 8082,
        icon: ICONS.PHONE,
        supportedOS: OS.MAC_ONLY,
        isActive: true,
        requiresSharedConfig: false,
        sourceExts: {
            factors: ['ios.mobile.js', 'ios.mobile.ts', 'mobile.js', 'mobile.ts'],
            platforms: ['ios.js', 'ios.ts'],
            fallbacks: ['mobile.native.js', 'mobile.native.ts', 'native.js', 'native.ts', 'js', 'tsx', 'ts']
        }
    },
    android: {
        defaultPort: 8083,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: true,
        requiresSharedConfig: false,
        sourceExts: {
            factors: ['android.mobile.js', 'android.mobile.ts', 'mobile.js', 'mobile.ts'],
            platforms: ['android.js', 'android.ts'],
            fallbacks: ['mobile.native.js', 'mobile.native.ts', 'native.js', 'native.ts', 'js', 'tsx', 'ts']
        }
    },
    androidtv: {
        defaultPort: 8084,
        icon: ICONS.TV,
        supportedOS: OS.ALL,
        isActive: true,
        requiresSharedConfig: false,
        sourceExts: {
            factors: ['androidtv.tv.js', 'androidtv.tv.ts', 'tv.js', 'tv.ts'],
            platforms: ['androidtv.js', 'androidtv.ts', 'android.js', 'android.ts'],
            fallbacks: ['tv.native.js', 'tv.native.ts', 'native.js', 'native.ts', 'js', 'tsx', 'ts']
        }
    },
    tvos: {
        defaultPort: 8085,
        icon: ICONS.TV,
        supportedOS: OS.MAC_ONLY,
        isActive: true,
        requiresSharedConfig: false,
        sourceExts: {
            factors: ['tvos.tv.js', 'tvos.tv.ts', 'tv.js', 'tv.ts'],
            platforms: ['tvos.js', 'tvos.ts', 'ios.js', 'ios.ts'],
            fallbacks: ['tv.native.js', 'tv.native.ts', 'native.js', 'native.ts', 'js', 'tsx', 'ts']
        }
    },
    macos: {
        defaultPort: 8086,
        icon: ICONS.DESKTOP,
        supportedOS: OS.MAC_ONLY,
        isActive: true,
        requiresSharedConfig: true,
        sourceExts: {
            factors: ['macos.desktop.js', 'macos.desktop.ts', 'desktop.js', 'desktop.ts'],
            platforms: ['macos.js', 'macos.ts'],
            fallbacks: [
                'desktop.web.js',
                'desktop.web.ts',
                'electron.js',
                'electron.ts',
                'web.js',
                'web.ts',
                'mjs',
                'js',
                'tsx',
                'ts'
            ]
        }
    },
    tizen: {
        defaultPort: 8087,
        icon: ICONS.TV,
        supportedOS: OS.ALL,
        isActive: true,
        requiresSharedConfig: true,
        sourceExts: {
            factors: ['tizen.tv.js', 'tizen.tv.ts', 'web.tv.js', 'web.tv.ts', 'tv.js', 'tv.ts'],
            platforms: ['tizen.js', 'tizen.ts'],
            fallbacks: ['tv.web.js', 'tv.web.ts', 'web.js', 'web.ts', 'mjs', 'js', 'tsx', 'ts']
        }
    },
    webos: {
        defaultPort: 8088,
        icon: ICONS.TV,
        supportedOS: OS.ALL,
        isActive: true,
        requiresSharedConfig: true,
        sourceExts: {
            factors: ['webos.tv.js', 'webos.tv.ts', 'web.tv.js', 'web.tv.ts', 'tv.js', 'tv.ts'],
            platforms: ['webos.js', 'webos.ts'],
            fallbacks: ['tv.web.js', 'tv.web.ts', 'web.js', 'web.ts', 'mjs', 'js', 'tsx', 'ts']
        }
    },
    androidwear: {
        defaultPort: 8089,
        icon: ICONS.WATCH,
        supportedOS: OS.ALL,
        isActive: true,
        requiresSharedConfig: false,
        sourceExts: {
            factors: ['androidwear.watch.js', 'androidwear.watch.ts', 'watch.js', 'watch.ts'],
            platforms: ['androidwear.js', 'androidwear.ts', 'android.js', 'android.ts'],
            fallbacks: ['watch.native.js', 'watch.native.ts', 'native.js', 'native.ts', 'js', 'tsx', 'ts']
        }
    },
    tizenwatch: {
        defaultPort: 8090,
        icon: ICONS.WATCH,
        supportedOS: OS.ALL,
        isActive: true,
        requiresSharedConfig: true,
        sourceExts: {
            factors: ['tizenwatch.watch.js', 'tizenwatch.watch.ts', 'watch.js', 'watch.ts'],
            platforms: ['tizenwatch.js', 'tizenwatch.ts'],
            fallbacks: ['watch.web.js', 'watch.web.ts', 'web.js', 'web.ts', 'mjs', 'js', 'tsx', 'ts']
        }
    },
    tizenmobile: {
        defaultPort: 8091,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: true,
        requiresSharedConfig: true,
        sourceExts: {
            factors: ['tizenmobile.mobile.js', 'tizenmobile.mobile.ts', 'mobile.js', 'mobile.ts'],
            platforms: ['tizenmobile.js', 'tizenmobile.ts'],
            fallbacks: ['mobile.web.js', 'mobile.web.ts', 'web.js', 'web.ts', 'mjs', 'js', 'tsx', 'ts']
        }
    },
    windows: {
        defaultPort: 8092,
        icon: ICONS.DESKTOP,
        supportedOS: OS.WINDOWS_ONLY,
        isActive: true,
        requiresSharedConfig: true,
        sourceExts: {
            factors: ['windows.desktop.js', 'windows.desktop.ts', 'desktop.js', 'desktop.ts'],
            platforms: ['windows.js'],
            fallbacks: [
                'desktop.web.js',
                'desktop.web.ts',
                'electron.js',
                'electron.ts',
                'web.js',
                'web.ts',
                'mjs',
                'js',
                'tsx',
                'ts'
            ]
        }
    },
    kaios: {
        defaultPort: 8093,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: true,
        requiresSharedConfig: true,
        sourceExts: {
            factors: ['kaios.mobile.js', 'kaios.mobile.ts', 'mobile.js', 'mobile.ts'],
            platforms: ['kaios.js', 'kaios.ts'],
            fallbacks: ['mobile.web.js', 'mobile.web.ts', 'web.js', 'web.ts', 'mjs', 'js', 'tsx', 'ts']
        }
    },
    firefoxos: {
        defaultPort: 8094,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: true,
        requiresSharedConfig: true,
        sourceExts: {
            factors: ['firefoxos.mobile.js', 'firefoxos.mobile.ts', 'mobile.js', 'mobile.ts'],
            platforms: ['firefoxos.js', 'firefoxos.ts'],
            fallbacks: ['mobile.web.js', 'mobile.web.ts', 'web.js', 'web.ts', 'mjs', 'js', 'tsx', 'ts']
        }
    },
    firefoxtv: {
        defaultPort: 8014,
        icon: ICONS.TV,
        supportedOS: OS.ALL,
        isActive: true,
        requiresSharedConfig: true,
        sourceExts: {
            factors: ['firefoxtv.tv.js', 'firefoxtv.tv.ts', 'web.tv.js', 'web.tv.ts', 'tv.js', 'tv.ts'],
            platforms: ['firefoxtv.js', 'firefoxtv.ts'],
            fallbacks: ['tv.web.js', 'tv.web.ts', 'web.js', 'web.ts', 'mjs', 'js', 'tsx', 'ts']
        }
    },
    chromecast: {
        defaultPort: 8095,
        icon: ICONS.TV,
        supportedOS: OS.ALL,
        isActive: true,
        requiresSharedConfig: true,
        sourceExts: {
            factors: ['chromecast.tv.js', 'chromecast.tv.ts', 'web.tv.js', 'web.tv.ts', 'tv.js', 'tv.ts'],
            platforms: ['chromecast.js', 'chromecast.ts'],
            fallbacks: ['tv.web.js', 'tv.web.ts', 'web.js', 'web.ts', 'mjs', 'js', 'tsx', 'ts']
        }
    },
    // NON ACTIVE
    watchos: {
        defaultPort: 999999,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    androidauto: {
        defaultPort: 8081,
        icon: ICONS.AUTO,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    alexa: {
        defaultPort: 999999,
        icon: ICONS.VOICE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    appleauto: {
        defaultPort: 8081,
        icon: ICONS.AUTO,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    astian: {
        defaultPort: 999999,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    blackberry: {
        defaultPort: 999999,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    chromeos: {
        defaultPort: 999999,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    fireos: {
        defaultPort: 999999,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    firetv: {
        defaultPort: 999999,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    hbbtv: {
        defaultPort: 999999,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    meego: {
        defaultPort: 999999,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    netcast: {
        defaultPort: 999999,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    occulus: {
        defaultPort: 999999,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    orsay: {
        defaultPort: 999999,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    ps4: {
        defaultPort: 999999,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    roku: {
        defaultPort: 999999,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    sailfish: {
        defaultPort: 999999,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    tivo: {
        defaultPort: 999999,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    ubuntu: {
        defaultPort: 999999,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    ubuntutouch: {
        defaultPort: 999999,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    unity: {
        defaultPort: 999999,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    vewd: {
        defaultPort: 999999,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    vieraconnect: {
        defaultPort: 999999,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    vizio: {
        defaultPort: 999999,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    webian: {
        defaultPort: 999999,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    wii: {
        defaultPort: 999999,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    wp10: {
        defaultPort: 999999,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    wp8: {
        defaultPort: 999999,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    xbox: {
        defaultPort: 999999,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    },
    xbox360: {
        defaultPort: 999999,
        icon: ICONS.PHONE,
        supportedOS: OS.ALL,
        isActive: false,
        requiresSharedConfig: true,
        sourceExts: []
    }
};

export const EXTENSIONS = {
    web: [...PLATFORMS.web.sourceExts.factors, ...PLATFORMS.web.sourceExts.platforms, ...PLATFORMS.web.sourceExts.fallbacks],
    'web-next': [...PLATFORMS['web-next'].sourceExts.factors, ...PLATFORMS['web-next'].sourceExts.platforms, ...PLATFORMS['web-next'].sourceExts.fallbacks],
    ios: [...PLATFORMS.ios.sourceExts.factors, ...PLATFORMS.ios.sourceExts.platforms, ...PLATFORMS.ios.sourceExts.fallbacks],
    android: [...PLATFORMS.android.sourceExts.factors, ...PLATFORMS.android.sourceExts.platforms, ...PLATFORMS.android.sourceExts.fallbacks],
    androidtv: [...PLATFORMS.androidtv.sourceExts.factors, ...PLATFORMS.androidtv.sourceExts.platforms, ...PLATFORMS.androidtv.sourceExts.fallbacks],
    tvos: [...PLATFORMS.tvos.sourceExts.factors, ...PLATFORMS.tvos.sourceExts.platforms, ...PLATFORMS.tvos.sourceExts.fallbacks],
    macos: [...PLATFORMS.macos.sourceExts.factors, ...PLATFORMS.macos.sourceExts.platforms, ...PLATFORMS.macos.sourceExts.fallbacks],
    tizen: [...PLATFORMS.tizen.sourceExts.factors, ...PLATFORMS.tizen.sourceExts.platforms, ...PLATFORMS.tizen.sourceExts.fallbacks],
    webos: [...PLATFORMS.webos.sourceExts.factors, ...PLATFORMS.webos.sourceExts.platforms, ...PLATFORMS.webos.sourceExts.fallbacks],
    androidwear: [...PLATFORMS.androidwear.sourceExts.factors, ...PLATFORMS.androidwear.sourceExts.platforms, ...PLATFORMS.androidwear.sourceExts.fallbacks],
    tizenwatch: [...PLATFORMS.tizenwatch.sourceExts.factors, ...PLATFORMS.tizenwatch.sourceExts.platforms, ...PLATFORMS.tizenwatch.sourceExts.fallbacks],
    tizenmobile: [...PLATFORMS.tizenmobile.sourceExts.factors, ...PLATFORMS.tizenmobile.sourceExts.platforms, ...PLATFORMS.tizenmobile.sourceExts.fallbacks],
    windows: [...PLATFORMS.windows.sourceExts.factors, ...PLATFORMS.windows.sourceExts.platforms, ...PLATFORMS.windows.sourceExts.fallbacks],
    kaios: [...PLATFORMS.kaios.sourceExts.factors, ...PLATFORMS.kaios.sourceExts.platforms, ...PLATFORMS.kaios.sourceExts.fallbacks],
    firefoxos: [...PLATFORMS.firefoxos.sourceExts.factors, ...PLATFORMS.firefoxos.sourceExts.platforms, ...PLATFORMS.firefoxos.sourceExts.fallbacks],
    firefoxtv: [...PLATFORMS.firefoxtv.sourceExts.factors, ...PLATFORMS.firefoxtv.sourceExts.platforms, ...PLATFORMS.firefoxtv.sourceExts.fallbacks],
    chromecast: [...PLATFORMS.chromecast.sourceExts.factors, ...PLATFORMS.chromecast.sourceExts.platforms, ...PLATFORMS.chromecast.sourceExts.fallbacks]
};

export const WEB_HOSTED_PLATFORMS = [
    WEB,
    TIZEN,
    WEBOS,
    MACOS,
    WINDOWS,
    TIZEN_MOBILE,
    TIZEN_WATCH
];
// PLATFORM GROUP
export const PLATFORM_GROUP_SMARTTV = 'smarttv';
export const PLATFORM_GROUP_ELECTRON = 'electron';
// FORM FACTOR
export const FORM_FACTOR_MOBILE = 'mobile';
export const FORM_FACTOR_DESKTOP = 'desktop';
export const FORM_FACTOR_WATCH = 'watch';
export const FORM_FACTOR_TV = 'tv';
// CLI
export const CLI_ANDROID_EMULATOR = 'androidEmulator';
export const CLI_ANDROID_ADB = 'androidAdb';
export const CLI_ANDROID_AVDMANAGER = 'androidAvdManager';
export const CLI_ANDROID_SDKMANAGER = 'androidSdkManager';
export const CLI_TIZEN_EMULATOR = 'tizenEmulator';
export const CLI_KAIOS_EMULATOR = 'tizenEmulator';
export const CLI_TIZEN = 'tizen';
export const CLI_SDB_TIZEN = 'tizenSdb';
export const CLI_WEBOS_ARES = 'webosAres';
export const CLI_WEBOS_ARES_PACKAGE = 'webosAresPackage';
export const CLI_WEBOS_ARES_INSTALL = 'webosAresInstall';
export const CLI_WEBOS_ARES_LAUNCH = 'webosAresLaunch';
export const CLI_WEBOS_ARES_SETUP_DEVICE = 'webosAresSetup';
export const CLI_WEBOS_ARES_DEVICE_INFO = 'webosAresDeviceInfo';
export const CLI_WEBOS_ARES_NOVACOM = 'webosAresNovacom';
// SDK
export const ANDROID_SDK = 'ANDROID_SDK';
export const ANDROID_NDK = 'ANDROID_NDK';
export const TIZEN_SDK = 'TIZEN_SDK';
export const WEBOS_SDK = 'WEBOS_SDK';
export const KAIOS_SDK = 'KAIOS_SDK';

export const RENATIVE_CONFIG_NAME = 'renative.json';
export const RENATIVE_CONFIG_LOCAL_NAME = 'renative.local.json';
export const RENATIVE_CONFIG_PRIVATE_NAME = 'renative.private.json';
export const RENATIVE_CONFIG_TEMPLATE_NAME = 'renative.template.json';
export const RENATIVE_CONFIG_BUILD_NAME = 'renative.build.json';
export const RENATIVE_CONFIG_RUNTIME_NAME = 'renative.runtime.json';
export const RENATIVE_CONFIG_WORKSPACES_NAME = 'renative.workspaces.json';
export const RENATIVE_CONFIG_PLUGINS_NAME = 'renative.plugins.json';
export const RENATIVE_CONFIG_TEMPLATES_NAME = 'renative.templates.json';
export const RENATIVE_CONFIG_PLATFORMS_NAME = 'renative.platforms.json';
export const RN_CLI_CONFIG_NAME = 'metro.config.js';
export const RN_BABEL_CONFIG_NAME = 'babel.config.js';
export const NEXT_CONFIG_NAME = 'next.config.js';
export const SAMPLE_APP_ID = 'helloworld';

export const IS_TABLET_ABOVE_INCH = 6.5;
export const IS_WEAR_UNDER_SIZE = 1000; // width + height

export const PACKAGE_JSON_FILEDS = [
    'name',
    'version',
    'description',
    'keywords',
    'homepage',
    'bugs',
    'license',
    'author',
    'contributors',
    'files',
    'main',
    'browser',
    'bin',
    'man',
    'directories',
    'repository',
    'scripts',
    'config',
    'dependencies',
    'devDependencies',
    'peerDependencies',
    'bundledDependencies',
    'optionalDependencies',
    'engines',
    'engineStrict',
    'os',
    'cpu',
    'private',
    'publishConfig'
];
export const SUPPORTED_PLATFORMS = [
    IOS,
    ANDROID,
    ANDROID_TV,
    ANDROID_WEAR,
    WEB,
    WEB_NEXT,
    TIZEN,
    TIZEN_MOBILE,
    TVOS,
    WEBOS,
    MACOS,
    WINDOWS,
    TIZEN_WATCH,
    KAIOS,
    FIREFOX_OS,
    FIREFOX_TV,
    CHROMECAST
];
export const SUPPORTED_PLATFORMS_MAC = [
    IOS,
    ANDROID,
    ANDROID_TV,
    ANDROID_WEAR,
    WEB,
    TIZEN_MOBILE,
    TIZEN,
    TVOS,
    WEBOS,
    MACOS,
    WINDOWS,
    TIZEN_WATCH,
    KAIOS,
    FIREFOX_OS,
    FIREFOX_TV
];
export const SUPPORTED_PLATFORMS_WIN = [
    ANDROID,
    ANDROID_TV,
    ANDROID_WEAR,
    WEB,
    TIZEN,
    TVOS,
    TIZEN_MOBILE,
    WEBOS,
    WINDOWS,
    TIZEN_WATCH,
    KAIOS,
    FIREFOX_OS,
    FIREFOX_TV
];
export const SUPPORTED_PLATFORMS_LINUX = [ANDROID, ANDROID_TV, ANDROID_WEAR];
export const SDK_PLATFORMS = {};
SDK_PLATFORMS[ANDROID] = ANDROID_SDK;
SDK_PLATFORMS[ANDROID_TV] = ANDROID_SDK;
SDK_PLATFORMS[ANDROID_WEAR] = ANDROID_SDK;
SDK_PLATFORMS[TIZEN] = TIZEN_SDK;
SDK_PLATFORMS[TIZEN_WATCH] = TIZEN_SDK;
SDK_PLATFORMS[TIZEN_MOBILE] = TIZEN_SDK;
SDK_PLATFORMS[WEBOS] = WEBOS_SDK;
SDK_PLATFORMS[KAIOS] = KAIOS_SDK;

export const configSchema = {
    analytics: {
        values: ['true', 'false'],
        key: 'enableAnalytics',
        default: true
    }
};

export const INJECTABLE_CONFIG_PROPS = ['id', 'title', 'entryFile', 'backgroundColor', 'scheme',
    'teamID', 'provisioningStyle', 'bundleAssets', 'enableHermes', 'universalApk', 'multipleAPKs', 'pagesDir'];

export const REDASH_URL = 'https://rnv.nxg.staging.24imedia.com/events';
export const REDASH_KEY = 'zCYINQqMxvat1V41Hb9d69JMVBDNLyeQ4wICtdtD';
