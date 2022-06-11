import { OPERATION_FAILED } from '../../consts.js';
import { unlink } from 'fs/promises';
import { isAbsolute, join } from 'path';

const rm = async payload => {
    const { currentPath } = payload.source;
    let pathToFile = payload.args[0];

    if (!isAbsolute(pathToFile)) {
        pathToFile = join(currentPath, pathToFile);
    }

    try{
        await unlink(pathToFile);
    } catch {
        throw new Error(OPERATION_FAILED);
    }
};

export default rm;