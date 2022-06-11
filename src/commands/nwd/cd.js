import { OPERATION_FAILED } from '../../consts.js';
import * as utils from '../../utils.js';

const cd = async args => {
    utils.validateArgumentsCount(args.length, 1);

    const dest = utils.toAbsolute(args[0]);

    try{
        await utils.validateIsDirectory(dest);
        process.chdir(dest);
    } catch {
        throw new Error(OPERATION_FAILED);
    }
} 

export default cd; 