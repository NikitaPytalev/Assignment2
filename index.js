import { homedir } from 'os';

let currentDirectoryPath = homedir();
let userName = getUserNameFromArgs();

console.log(`Welcome to the File Manager, ${userName}!`);

process.stdin.on('data', chunk => {
    const chunkToString = chunk.toString().trim()
    if(chunkToString === ".exit") {
        process.exit();
    }

    console.log('Input: ' + chunk);

    console.log(`You are currently in ${currentDirectoryPath}`)
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