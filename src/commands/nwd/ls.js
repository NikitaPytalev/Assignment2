import { OPERATION_FAILED } from '../../consts.js';
import { validateArgumentsCount } from '../../utils.js';
import { readdir } from 'fs/promises';

const ls = async payload => {
    validateArgumentsCount(payload.args.length, 0);

    const currentPath = process.cwd();
    
    try{
        const files = await readdir(currentPath);
        console.log(files);
    } catch {
        throw new Error(OPERATION_FAILED);
    }
};

export default ls;