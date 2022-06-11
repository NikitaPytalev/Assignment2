import { OPERATION_FAILED } from '../../consts.js';
import * as utils from '../../utils.js';
import { rename } from 'fs/promises';
import { basename, join } from 'path';

const mv = async payload => {
    utils.validateArgumentsCount(payload.args.length, 2);

    const src = utils.toAbsolute(payload.args[0]);
    const dest = utils.toAbsolute(payload.args[1]);

    await utils.validateIsFile(src);
    await utils.validateIsDirectory(dest);

    const destFilePath = join(dest, basename(src));
    
    try{
        await rename(src, destFilePath);
    } catch {
        throw new Error(OPERATION_FAILED);
    }
};

export default mv;