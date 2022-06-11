import { validateArgumentsCount } from '../../utils.js';

const up = async payload => {
    validateArgumentsCount(payload.args.length, 0);

    const fileManager = payload.source;
    await fileManager.updateCurrentPath('../');
} 

export default up;