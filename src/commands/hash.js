import { OPERATION_FAILED } from '../consts.js';
import { readFile, lstat } from 'fs/promises';
import { isAbsolute, join } from 'path';
import { createHash } from 'crypto';

const hash = async payload => {
    const { currentPath } = payload.source;

    let pathToFile = payload.args[0];

    if (!isAbsolute(pathToFile)) {
        pathToFile = join(currentPath, pathToFile);
    }

    const isFile = await (await lstat(pathToFile)).isFile();
    if (!isFile) throw new Error(OPERATION_FAILED);

    try{
        const data = await readFile(pathToFile);
        const hex = createHash('sha256').update(data).digest('hex');

        console.log(hex);
    } catch {
        throw new Error(OPERATION_FAILED);
    }
};

export default hash;