import { OPERATION_FAILED } from '../../consts.js';
import { validateArgumentsCount, validateIsDirectory } from '../../utils.js';
import { rename } from 'fs/promises';
import { basename, isAbsolute, join } from 'path';

const mv = async payload => {
    validateArgumentsCount(payload.args.length, 2);

    const currentPath = process.cwd();
    
    let pathToFile = payload.args[0];
    let pathToNewDirectory = payload.args[1];

    if (!isAbsolute(pathToFile)) {
        pathToFile = join(currentPath, pathToFile);
    }

    if (!isAbsolute(pathToNewDirectory)) {
        pathToNewDirectory = join(currentPath, pathToNewDirectory);
    }

    await validateIsDirectory(pathToNewDirectory);

    const newfilePath = join(pathToNewDirectory, basename(pathToFile));

    try{
        await rename(pathToFile, newfilePath);
    } catch {
        throw new Error(OPERATION_FAILED);
    }
};

export default mv;