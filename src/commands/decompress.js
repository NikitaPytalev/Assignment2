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
    if (!isFile) throw Error(consts.OPERATION_FAILED);

    var unzip = zlib.createBrotliDecompress();

    var read = fs.createReadStream(src);
    var write = fs.createWriteStream(dest);

    read.pipe(unzip).pipe(write);
};

export default decompress;