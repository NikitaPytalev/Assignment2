import { readdir } from 'fs/promises';

const ls = async payload => {
    const { currentPath } = payload.source;

    const files = await readdir(currentPath);
    console.log(files);
};

export default ls;