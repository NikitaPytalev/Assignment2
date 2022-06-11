import { OPERATION_FAILED } from '../../consts.js';
import { validateArgumentsCount } from '../../utils.js';
import { writeFile } from 'fs/promises';
import { join } from 'path';

const add = async payload => {
    validateArgumentsCount(payload.args.length, 1);
    
    const currentPath = payload.source.currentPath;
    const fileName = payload.args[0];
    const filePath = join(currentPath, fileName);

    try{
        await writeFile(filePath, '', { flag: 'wx' });
    } catch {
        throw new Error(OPERATION_FAILED);
    }
};

export default add;