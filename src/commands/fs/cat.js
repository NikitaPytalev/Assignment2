import { OPERATION_FAILED } from '../../consts.js';
import { validateArgumentsCount } from '../../utils.js';
import { readFile, lstat } from 'fs/promises';
import { join } from 'path';

const cat = async payload => {
    validateArgumentsCount(payload.args.length, 1);

    const filePath = join(payload.source.currentPath, payload.args[0]);
    const isFile = await (await lstat(filePath)).isFile();
    
    if (!isFile) throw new Error(consts.OPERATION_FAILED);
    
    try{
        const text = await readFile(filePath, { encoding: 'utf8'});
        console.log(text)
    } catch {
        throw new Error(OPERATION_FAILED);
    }
};

export default cat;