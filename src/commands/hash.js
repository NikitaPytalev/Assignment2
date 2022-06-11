import { readFile, lstat } from 'fs/promises';
import { isAbsolute, join } from 'path';
import { createHash } from 'crypto';
import * as consts from '../consts.js';

const hash = async payload => {
    const { currentPath } = payload.source;

    let pathToFile = payload.args[0];

    if (!isAbsolute(pathToFile)) {
        pathToFile = join(currentPath, pathToFile);
    }

    const isFile = await (await lstat(pathToFile)).isFile();
    if (!isFile) throw Error(consts.OPERATION_FAILED);

    const data = await readFile(pathToFile);
    const hex = createHash('sha256').update(data).digest('hex');

    console.log(hex);
};

export default hash;