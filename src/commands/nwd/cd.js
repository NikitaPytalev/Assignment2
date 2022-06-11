import { OPERATION_FAILED } from '../../consts.js';
import { validateArgumentsCount } from '../../utils.js';

const cd = async payload => {
    validateArgumentsCount(payload.args.length, 1);

    const fileManager = payload.source;
    const inputPath = payload.args[0];

    try{
        return await fileManager.updateCurrentPath(inputPath);
    } catch {
        throw new Error(OPERATION_FAILED);
    }
} 

export default cd; 