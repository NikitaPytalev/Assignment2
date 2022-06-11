import { copyFile, lstat } from 'fs/promises';
import { basename, isAbsolute, join } from 'path';
import * as consts from '../consts.js';

const cp = async payload => {
    const { currentPath } = payload.source;

    let pathToFile = payload.args[0];
    let pathToNewDirectory = payload.args[1];

    if (!isAbsolute(pathToFile)) {
        pathToFile = join(currentPath, pathToFile);
    }

    if (!isAbsolute(pathToNewDirectory)) {
        pathToNewDirectory = join(currentPath, pathToNewDirectory);
    }

    const isDirectory = await (await lstat(pathToNewDirectory)).isDirectory();
    if (!isDirectory) throw Error(consts.OPERATION_FAILED);

    const newFilePath = join(pathToNewDirectory, basename(pathToFile));

    await copyFile(pathToFile, newFilePath);
};

export default cp;