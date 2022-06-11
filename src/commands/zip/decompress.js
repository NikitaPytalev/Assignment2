import { OPERATION_FAILED } from '../../consts.js';
import * as utils from '../../utils.js';
import fs from 'fs';
import zlib from 'zlib';

const decompress = async payload => {
    utils.validateArgumentsCount(payload.args.length, 2);

    const src = utils.toAbsolute(payload.args[0]);
    let dest = utils.toAbsolute(payload.args[1]);

    await utils.validateIsFile(src);

    try{
        var unzip = zlib.createBrotliDecompress();

        var read = fs.createReadStream(src);
        var write = fs.createWriteStream(dest);
    
        read.pipe(unzip).pipe(write);
    } catch {
        throw new Error(OPERATION_FAILED);
    }
};

export default decompress;