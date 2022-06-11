import { OPERATION_FAILED } from '../../consts.js';
import * as utils from '../../utils.js';
import  fs from 'fs';
import zlib from 'zlib';
import { basename, isAbsolute, join } from 'path';

const compress = async payload => {
    utils.validateArgumentsCount(payload.args.length, 2);

    const { currentPath } = payload.source;

    let pathToFile = payload.args[0];
    let pathToArchive = payload.args[1];

    if (!isAbsolute(pathToFile)) {
        pathToFile = join(currentPath, pathToFile);
    }

    if (!isAbsolute(pathToArchive)) {
        pathToArchive = join(currentPath, pathToArchive);
    }

    await utils.validateIsFile(pathToFile);

    await utils.validateIsDirectory(pathToArchive);

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