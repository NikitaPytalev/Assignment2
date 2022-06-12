import { OPERATION_FAILED } from '../../consts.js';
import * as utils from '../../utils.js';
import fs from 'fs';
import { basename, join } from 'path';

const cp = async args => {
    utils.validateArgumentsCount(args.length, 2);

    const src = utils.toAbsolute(args[0]);
    const dest = utils.toAbsolute(args[1]);
    
    try{
        await utils.validateIsFile(src);
        await utils.validateIsDirectory(dest);
    
        const destFilePath = join(dest, basename(src));

        const readStream = fs.createReadStream(src)
        const writeStream = fs.createWriteStream(destFilePath);

        readStream.pipe(writeStream);
    } catch {
        throw new Error(OPERATION_FAILED);
    }
};

export default cp;