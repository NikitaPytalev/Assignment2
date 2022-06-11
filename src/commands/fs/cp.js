import { OPERATION_FAILED } from '../../consts.js';
import { validateArgumentsCount, validateIsDirectory } from '../../utils.js';
import { copyFile } from 'fs/promises';
import { basename, isAbsolute, join } from 'path';

const cp = async payload => {
    validateArgumentsCount(payload.args.length, 2);

    const { currentPath } = payload.source;

    let pathToFile = payload.args[0];
    let pathToNewDirectory = payload.args[1];

    if (!isAbsolute(pathToFile)) {
        pathToFile = join(currentPath, pathToFile);
    }

    if (!isAbsolute(pathToNewDirectory)) {
        pathToNewDirectory = join(currentPath, pathToNewDirectory);
    }

    await validateIsDirectory(pathToNewDirectory);

    const newFilePath = join(pathToNewDirectory, basename(pathToFile));
    
    try{
        await copyFile(pathToFile, newFilePath);
    } catch {
        throw new Error(OPERATION_FAILED);
    }
};

export default cp;