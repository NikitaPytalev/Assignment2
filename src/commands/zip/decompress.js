import { OPERATION_FAILED } from '../../consts.js';
import { validateArgumentsCount, validateIsFile } from '../../utils.js';
import fs from 'fs';
import zlib from 'zlib';
import { isAbsolute, join } from 'path';

const decompress = async payload => {
    validateArgumentsCount(payload.args.length, 2);

    const currentPath = process.cwd();

    let src = payload.args[0];
    let dest = payload.args[1];

    if (!isAbsolute(src)) {
        src = join(currentPath, src);
    }

    if (!isAbsolute(dest)) {
        dest = join(currentPath, dest);
    }

    await validateIsFile(src);

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