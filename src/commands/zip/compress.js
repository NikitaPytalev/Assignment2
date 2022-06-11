import { OPERATION_FAILED } from '../../consts.js';
import * as utils from '../../utils.js';
import fs from 'fs';
import zlib from 'zlib';
import { basename, extname, join } from 'path';

const BROTLI_EXT = '.br';

const compress = async payload => {
    utils.validateArgumentsCount(payload.args.length, 2);

    const src = utils.toAbsolute(payload.args[0]);
    let dest = utils.toAbsolute(payload.args[1]);

    await utils.validateIsFile(src);

    if (!extname(dest).endsWith(BROTLI_EXT)) {
        dest += BROTLI_EXT;
    }

    try{
        var zip = zlib.createBrotliCompress();
    
        var read = fs.createReadStream(src);
        var write = fs.createWriteStream(dest);
    
        read.pipe(zip).pipe(write);	
    } catch {
        throw new Error(OPERATION_FAILED);
    }
};

export default compress;