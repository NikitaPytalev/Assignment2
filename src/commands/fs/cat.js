import { OPERATION_FAILED } from '../../consts.js';
import { validateArgumentsCount, validateIsFile } from '../../utils.js';
import { readFile, lstat } from 'fs/promises';
import { join } from 'path';

const cat = async payload => {
    validateArgumentsCount(payload.args.length, 1);

    const filePath = join(payload.source.currentPath, payload.args[0]);

    await validateIsFile(filePath);
    
    try{
        const text = await readFile(filePath, { encoding: 'utf8'});
        console.log(text)
    } catch {
        throw new Error(OPERATION_FAILED);
    }
};

export default cat;