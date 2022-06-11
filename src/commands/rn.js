import { OPERATION_FAILED } from '../consts.js';
import { rename } from 'fs/promises';
import { isAbsolute, join } from 'path';

const rn = async payload => {
    const { currentPath } = payload.source;
    
    let pathToFile = payload.args[0];

    if (!isAbsolute(pathToFile)) {
        pathToFile = join(currentPath, pathToFile);
    }

    const newfilePath = join(currentPath, payload.args[1]);

    try{
        await rename(pathToFile, newfilePath);
    } catch {
        throw new Error(OPERATION_FAILED);
    } 
};

export default rn;