import chalk from 'chalk';


const RNV_START = '🚀 ReNative';
const RNV = 'ReNative';
const LINE = chalk.white.bold('----------------------------------------------------------');
const LINE2 = chalk.gray('----------------------------------------------------------');

export const logWelcome = () => {
    let str = `
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│        ${chalk.red('██████╗')} ███████╗${chalk.red('███╗   ██╗')} █████╗ ████████╗██╗${chalk.red('██╗   ██╗')}███████╗       │
│        ${chalk.red('██╔══██╗')}██╔════╝${chalk.red('████╗  ██║')}██╔══██╗╚══██╔══╝██║${chalk.red('██║   ██║')}██╔════╝       │
│        ${chalk.red('██████╔╝')}█████╗  ${chalk.red('██╔██╗ ██║')}███████║   ██║   ██║${chalk.red('██║   ██║')}█████╗         │
│        ${chalk.red('██╔══██╗')}██╔══╝  ${chalk.red('██║╚██╗██║')}██╔══██║   ██║   ██║${chalk.red('╚██╗ ██╔╝')}██╔══╝         │
│        ${chalk.red('██║  ██║')}███████╗${chalk.red('██║ ╚████║')}██║  ██║   ██║   ██║${chalk.red(' ╚████╔╝ ')}███████╗       │
│        ${chalk.red('╚═╝  ╚═╝')}╚══════╝${chalk.red('╚═╝  ╚═══╝')}╚═╝  ╚═╝   ╚═╝   ╚═╝${chalk.red('  ╚═══╝  ')}╚══════╝       │
│                                                                              │
`;

    str += printIntoBox(`      🚀 Version: ${_c.files.rnvPackage.version}`);
    str += printIntoBox('      🚀 https://renative.org');
    str += printIntoBox('');
    str += printBoxEnd();
    console.log(str);
};

let _messages;
let _currentJob;
let _currentProcess;
let _isInfoEnabled = false;
let _c;

export const configureLogger = (c, process, job, subCommand, isInfoEnabled) => {
    _messages = [];
    _c = c;
    _currentJob = job;
    _currentProcess = process;
    _currentSubCommand = subCommand;
    _isInfoEnabled = isInfoEnabled;
};

export const logAndSave = (msg, skipLog) => {
    if (!_messages.includes(msg)) _messages.push(msg);
    if (!skipLog) console.log(`${msg}`);
};

export const logSummary = () => {
    let logContent = printIntoBox('All good as 🦄 ');
    if (_messages.length) {
        logContent = '';
        _messages.forEach((m) => {
            logContent += `│ ${m}\n`;
        });
    }


    let str = printBoxStart('🚀  SUMMARY');
    // str += printIntoBox('SHlelelele euheu ehhh');
    if (_c.appId) str += printIntoBox(`App Config: ${_c.appId}`);
    if (_c.program.scheme) str += printIntoBox(`Build Scheme: ${_c.program.scheme}`);
    if (_c.platform) str += printIntoBox(`Platform: ${_c.platform}`);
    str += printIntoBox('');
    str += logContent;
    str += printIntoBox('');
    str += printBoxEnd();

    console.log(str);
};

export const setCurrentJob = (job) => {
    _currentJob = job;
};

export const logTask = (task) => {
    console.log(chalk.green(`${RNV} ${_currentJob} - ${task} - Starting!`));
};

export const logWarning = (msg) => {
    logAndSave(chalk.yellow(`⚠️  ${RNV} ${_currentJob} - WARNING: ${msg}`));
};

export const logInfo = (msg) => {
    console.log(chalk.magenta(`ℹ️  ${RNV} ${_currentJob} - NOTE: ${msg}`));
};

export const logDebug = (...args) => {
    if (_isInfoEnabled) console.log.apply(null, args);
};

export const logComplete = (isEnd = false) => {
    console.log(chalk.white.bold(`\n ${RNV} ${_currentJob || ''} - Done! 🚀`));
    if (isEnd) logEnd(0);
};

export const logSuccess = (msg) => {
    console.log(`✅ ${chalk.magenta(msg)}`);
};

export const logError = (e, isEnd = false) => {
    if (e && e.message) {
        logAndSave(chalk.red.bold(`🛑  ${RNV} ${_currentJob} - ERRROR! ${e.message}\n${e.stack}`), isEnd);
    } else {
        logAndSave(chalk.red.bold(`🛑  ${RNV} ${_currentJob} - ERRROR! ${e}`), isEnd);
    }
    if (isEnd) logEnd(1);
};

export const logEnd = (code) => {
    logSummary();
    _currentProcess.exit(code);
};

export const logInitialize = () => {
    logWelcome();
    // console.log(
    //     chalk.white(`\n${LINE}\n ${RNV_START} ${chalk.white.bold(`${_currentJob} ${_currentSubCommand || ''}`)} is firing up! 🔥\n${LINE}\n`),
    // );
};

export const logAppInfo = c => new Promise((resolve, reject) => {
    console.log(chalk.gray(`\n${LINE2}\nℹ️  Current App Config: ${chalk.white.bold(c.files.appConfigFile.id)}\n${LINE2}`));

    resolve();
});

export const printIntoBox = (str2) => {
    let output = chalk.default('│  ');
    const endLine = '                                                                               │\n';
    output += chalk.default(str2);
    const l = output.length - endLine.length;
    output += chalk.default(endLine.slice(l));
    return output;
};

export const printBoxStart = (str) => {
    let output = chalk.default('┌──────────────────────────────────────────────────────────────────────────────┐\n');
    output += printIntoBox(str);
    output += '├──────────────────────────────────────────────────────────────────────────────┤\n';
    return output;
};

export const printBoxEnd = () => chalk.default('└──────────────────────────────────────────────────────────────────────────────┘');
