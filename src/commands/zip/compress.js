import { OPERATION_FAILED } from '../../consts.js';
import { validateArgumentsCount } from '../../utils.js';
import { lstat } from 'fs/promises';
import  fs from 'fs';
import zlib from 'zlib';
import { basename, isAbsolute, join } from 'path';

const compress = async payload => {
    validateArgumentsCount(payload.args.length, 2);
    
    const { currentPath } = payload.source;

    let pathToFile = payload.args[0];
    let pathToArchive = payload.args[1];

    if (!isAbsolute(pathToFile)) {
        pathToFile = join(currentPath, pathToFile);
    }

    if (!isAbsolute(pathToArchive)) {
        pathToArchive = join(currentPath, pathToArchive);
    }

    const isFile = await (await lstat(pathToFile)).isFile();
    if (!isFile) throw new Error(consts.OPERATION_FAILED);

    const isDirectory = await (await lstat(pathToArchive)).isDirectory();
    if (!isDirectory) throw new Error(consts.OPERATION_FAILED);

    try{
        var zip = zlib.createBrotliCompress();
    
        var read = fs.createReadStream(pathToFile);
        var write = fs.createWriteStream(join(pathToArchive, basename(pathToFile) + '.br'));
    
        read.pipe(zip).pipe(write);	
    } catch {
        throw new Error(OPERATION_FAILED);
    }
};

export default compress;