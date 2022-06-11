import { OPERATION_FAILED } from '../../consts.js';
import * as utils from '../../utils.js';
import { readFile } from 'fs/promises';
import { createHash } from 'crypto';

const hash = async args => {
    utils.validateArgumentsCount(args.length, 1);

    const filePath = utils.toAbsolute(args[0]);

    await utils.validateIsFile(filePath);

    try{
        const data = await readFile(filePath);
        const hex = createHash('sha256').update(data).digest('hex');

        console.log(hex);
    } catch {
        throw new Error(OPERATION_FAILED);
    }
};

export default hash;