import { rename, lstat } from 'fs/promises';
import { basename, isAbsolute, join } from 'path';

const mv = async payload => {
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

    const newfilePath = join(pathToNewDirectory, basename(pathToFile));

    await rename(pathToFile, newfilePath);
};

export default mv;