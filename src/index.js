import getCommand from './commands/index.js';
import { homedir } from 'os';
import readline from 'readline';

const userName = getUserNameFromArgs();

console.log(`Welcome to the File Manager, ${ userName }!`);

process.chdir(homedir());
printCurrentDirectoryMessage(process.cwd());

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", async input => {
    const stringInput = input.toString().trim();
    
    if(stringInput === ".exit") {
        printGoodbyeMessage(userName);
        process.exit();
    }
    
    try {
        await execute(stringInput);
    } catch (e) {
        console.error(e.message);
    }

    printCurrentDirectoryMessage(process.cwd());
});

rl.on("SIGINT", () => {
    printGoodbyeMessage(userName);
    process.exit();
});

function getUserNameFromArgs () {
    let usernameKeyValue = process.argv?.slice(2).filter(str => str.startsWith('--username'))[0];
    let userName = usernameKeyValue?.split('=')[1] ?? 'User';

    return userName;
};

function printCurrentDirectoryMessage (currentPath) {
    console.log(`You are currently in ${ currentPath }`);
}

function printGoodbyeMessage (userName) {
    console.log(`Thank you for using File Manager, ${ userName }!`);
}

async function execute (input) {
    const args = input.split(' ');
    
    const commandName = args.shift();

    const command = getCommand(commandName);

    await command(args);
} 