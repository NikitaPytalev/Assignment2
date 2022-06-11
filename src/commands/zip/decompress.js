import { BROTLI_EXT, OPERATION_FAILED } from '../../consts.js';
import * as utils from '../../utils.js';
import fs from 'fs';
import zlib from 'zlib';
import { extname } from 'path';

const decompress = async args => {
    utils.validateArgumentsCount(args.length, 2);

    const src = utils.toAbsolute(args[0]);
    let dest = utils.toAbsolute(args[1]);

    if (!extname(src).endsWith(BROTLI_EXT)) {
        throw new Error(OPERATION_FAILED);
    }

    try{
        await utils.validateIsFile(src);

        var unzip = zlib.createBrotliDecompress();

        var read = fs.createReadStream(src);
        var write = fs.createWriteStream(dest);
    
        read.pipe(unzip).pipe(write);
    } catch {
        throw new Error(OPERATION_FAILED);
    }
};

export default decompress;