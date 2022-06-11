import { open } from 'fs/promises';
import { join } from 'path';

const add = async payload => {
    const currentPath = payload.source.currentPath;
    const fileName = payload.args[0];
    const filePath = join(currentPath, fileName);

    await open(filePath, 'wx');
};

export default add;