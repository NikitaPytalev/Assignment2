import { OPERATION_FAILED } from '../../consts.js';
import { readdir } from 'fs/promises';

const ls = async payload => {
    const { currentPath } = payload.source;

    try{
        const files = await readdir(currentPath);
        console.log(files);
    } catch {
        throw new Error(OPERATION_FAILED);
    }
};

export default ls;