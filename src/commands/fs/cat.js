import { OPERATION_FAILED } from '../../consts.js';
import { validateArgumentsCount, validateIsFile, toAbsolute } from '../../utils.js';
import { readFile } from 'fs/promises';

const cat = async args => {
    validateArgumentsCount(args.length, 1);

    const filePath = toAbsolute(args[0]);

    await validateIsFile(filePath);
    
    try{
        const text = await readFile(filePath, { encoding: 'utf8'});
        console.log(text)
    } catch {
        throw new Error(OPERATION_FAILED);
    }
};

export default cat;