import FileManager from './FileManager.js';

const userName = getUserNameFromArgs();

console.log(`Welcome to the File Manager, ${ userName }!`);

const fileManager = new FileManager();

printCurrentDirectoryMessage(fileManager.currentPath);

process.stdin.on('data', async input => {

    const stringInput = input.toString().trim()
    if(stringInput === ".exit") {
        printGoodbyeMessage(userName);
        process.exit();
    }

    try {
        await fileManager.execute(stringInput);
    } catch (e) {
        console.error(e.message);
    }

    printCurrentDirectoryMessage(fileManager.currentPath);
});

process.on('SIGINT', () => {
    printGoodbyeMessage(userName);
    process.exit();
});

function getUserNameFromArgs () {
    let usernameKeyValue = process.argv.slice(2).filter(str => str.startsWith('--username'))[0];
    let userName = usernameKeyValue.split('=')[1];

    return userName;
};

function printCurrentDirectoryMessage (currentPath) {
    console.log(`You are currently in ${ currentPath }`)
}

function printGoodbyeMessage (userName) {
    console.log(`Thank you for using File Manager, ${ userName }!`);
}