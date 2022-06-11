import { validateArgumentsCount } from '../../utils.js';
import { join } from 'path';

const up = async payload => {
    validateArgumentsCount(payload.args.length, 0);
    process.chdir(join(process.cwd(), '../'));
} 

export default up;