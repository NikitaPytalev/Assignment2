import { OPERATION_FAILED } from '../../consts.js';
import { validateArgumentsCount, validateIsFile } from '../../utils.js';
import { readFile } from 'fs/promises';
import { isAbsolute, join } from 'path';
import { createHash } from 'crypto';

const hash = async payload => {
    validateArgumentsCount(payload.args.length, 1);

    const { currentPath } = payload.source;

    let pathToFile = payload.args[0];

    if (!isAbsolute(pathToFile)) {
        pathToFile = join(currentPath, pathToFile);
    }

    await validateIsFile(pathToFile);

    try{
        const data = await readFile(pathToFile);
        const hex = createHash('sha256').update(data).digest('hex');

        console.log(hex);
    } catch {
        throw new Error(OPERATION_FAILED);
    }
};

export default hash;