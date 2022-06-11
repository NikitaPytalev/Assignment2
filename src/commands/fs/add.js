import { OPERATION_FAILED } from '../../consts.js';
import { validateArgumentsCount, toAbsolute } from '../../utils.js';
import { writeFile } from 'fs/promises';

const add = async args => {
    validateArgumentsCount(args.length, 1);

    try{
        const fileName = args[0];
        const filePath = toAbsolute(fileName);

        await writeFile(filePath, '', { flag: 'wx' });
    } catch {
        throw new Error(OPERATION_FAILED);
    }
};

export default add;