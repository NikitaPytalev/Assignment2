import { OPERATION_FAILED } from '../../consts.js';
import * as utils from '../../utils.js';

const cd = async payload => {
    utils.validateArgumentsCount(payload.args.length, 1);

    const dest = utils.toAbsolute(payload.args[0]);

    try{
        await utils.validateIsDirectory(dest);
        process.chdir(dest);
    } catch {
        throw new Error(OPERATION_FAILED);
    }
} 

export default cd; 