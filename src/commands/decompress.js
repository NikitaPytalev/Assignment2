import { OPERATION_FAILED } from '../consts.js';
import { lstat } from 'fs/promises';
import fs from 'fs';
import zlib from 'zlib';
import { isAbsolute, join } from 'path';

const decompress = async payload => {
    const { currentPath } = payload.source;

    let src = payload.args[0];
    let dest = payload.args[1];

    if (!isAbsolute(src)) {
        src = join(currentPath, src);
    }

    if (!isAbsolute(dest)) {
        dest = join(currentPath, dest);
    }

    const isFile = await (await lstat(src)).isFile();
    if (!isFile) throw new Error(consts.OPERATION_FAILED);

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