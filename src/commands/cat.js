import { readFile, lstat } from 'fs/promises';
import { join } from 'path';

const cat = async payload => {

    const filePath = join(payload.source.currentPath, payload.args[0]);
    const isFile = await (await lstat(filePath)).isFile();
    
    if (!isFile) throw Error(consts.OPERATION_FAILED);

    const text = await readFile(filePath, { encoding: 'utf8'});
    console.log(text)
};

export default cat;