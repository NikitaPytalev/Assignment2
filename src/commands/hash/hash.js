import { OPERATION_FAILED } from '../../consts.js';
import * as utils from '../../utils.js';
import { pipeline } from 'stream/promises';
import { createHash } from 'crypto';
import fs from 'fs';

const hash = async args => {
    utils.validateArgumentsCount(args.length, 1);

    const filePath = utils.toAbsolute(args[0]);

    try{
        await utils.validateIsFile(filePath);

        const readable = fs.createReadStream(filePath);
        const hash = createHash('sha256').setEncoding('hex');

        await pipeline(
            readable,
            hash
        );

        console.log(hash.read());
    } catch {
        throw new Error(OPERATION_FAILED);
    }
};

export default hash;