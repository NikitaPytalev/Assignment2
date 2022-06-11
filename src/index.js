import { homedir } from 'os';
import getCommand from './commands/index.js';

let currentPath = homedir();
let userName = getUserNameFromArgs();

console.log(`Welcome to the File Manager, ${userName}!`);

process.stdin.on('data', input => {
    const stringInput = input.toString().trim()
    if(stringInput === ".exit") {
        process.exit();
    }

    //console.log('Input: ' + chunk);
    const command = getCommand(stringInput);

    const payload = {
        source: this,
        currentPath,
        command : stringInput,
    };

    command(payload);

    console.log(`You are currently in ${currentPath}`)
});

process.on('SIGINT', function() {
    console.log(`Thank you for using File Manager, ${userName}!`);
    process.exit();
});

function getUserNameFromArgs() {
    let usernameKeyValue = process.argv.slice(2).filter(str => str.startsWith('--username'))[0];
    let userName = usernameKeyValue.split('=')[1];

    return userName;
}