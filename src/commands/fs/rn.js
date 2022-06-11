import { OPERATION_FAILED } from '../../consts.js';
import { toAbsolute, validateArgumentsCount } from '../../utils.js';
import { rename } from 'fs/promises';

const rn = async payload => {
    validateArgumentsCount(payload.args.length, 2);

    const src = toAbsolute(payload.args[0]);
    const dest = toAbsolute(payload.args[1]);

    try{
        await rename(src, dest);
    } catch {
        throw new Error(OPERATION_FAILED);
    } 
};

export default rn;