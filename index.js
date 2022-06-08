import { homedir } from 'os';

let currentDirectoryPath = homedir();

console.log('Welcome to the File Manager, Username!');

process.stdin.on('data', chunk => {
    const chunkToString = chunk.toString().trim()
    if(chunkToString === ".exit") {
        process.exit();
    }

    console.log('Input: ' + chunk);

    console.log(`You are currently in ${currentDirectoryPath}`)
});

process.on('SIGINT', function() {
    console.log('Thank you for using File Manager, Username!');
    process.exit();
});