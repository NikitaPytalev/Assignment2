import { OPERATION_FAILED } from '../../consts.js';
import { toAbsolute, validateArgumentsCount } from '../../utils.js';
import { unlink } from 'fs/promises';

const rm = async payload => {
    validateArgumentsCount(payload.args.length, 1);

    const filePath = toAbsolute(payload.args[0]);

    try{
        await unlink(filePath);
    } catch {
        throw new Error(OPERATION_FAILED);
    }
};

export default rm;