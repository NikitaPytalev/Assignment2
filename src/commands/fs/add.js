import { OPERATION_FAILED } from '../../consts.js';
import { validateArgumentsCount, toAbsolute } from '../../utils.js';
import { writeFile } from 'fs/promises';

const add = async payload => {
    validateArgumentsCount(payload.args.length, 1);

    const fileName = payload.args[0];
    const filePath = toAbsolute(fileName);

    try{
        await writeFile(filePath, '', { flag: 'wx' });
    } catch {
        throw new Error(OPERATION_FAILED);
    }
};

export default add;