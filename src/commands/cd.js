import { OPERATION_FAILED } from '../consts.js';

const cd = async payload => {
    const fileManager = payload.source;
    const inputPath = payload.args[0];

    try{
        return await fileManager.updateCurrentPath(inputPath);
    } catch {
        throw new Error(OPERATION_FAILED);
    }
} 

export default cd; 