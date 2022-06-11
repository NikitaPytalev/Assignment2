import { access, lstat } from 'fs/promises';
import getCommand from './commands/index.js';
import { homedir } from 'os';
import { isAbsolute, join } from 'path';
import * as consts from './consts.js';

class FileManager {
    constructor () {
        this.currentPath = homedir();
    }

    updateCurrentPath = async path => {
        let newPath;
        if (isAbsolute(path)) {
            newPath = path; 
        } else {
            newPath = join(this.currentPath , path)
        }

        await access(newPath);

        const isDirectory = await (await lstat(newPath)).isDirectory();
        if (!isDirectory) throw new Error(consts.OPERATION_FAILED);

        this.currentPath = newPath;
    }

    execute = async input => {
        const args = input.split(' ')
        const commandName = args.shift();

        const command = getCommand(commandName);

        const payload = {
            source: this,
            command : input,
            args
        };
    
        await command(payload);
    } 
}

export default FileManager;