import { OPERATION_FAILED } from '../consts.js';
import { writeFile } from 'fs/promises';
import { join } from 'path';

const add = async payload => {
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