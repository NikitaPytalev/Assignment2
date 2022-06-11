import { INVALID_INPUT } from '../consts.js';
import add from './add.js';
import cat from './cat.js';
import cd from './cd.js';
import compress from './compress.js';
import cp from './cp.js';
import decompress from './decompress.js';
import hash from './hash.js';
import ls from './ls.js';
import mv from './mv.js';
import os from './os.js';
import rm from './rm.js';
import rn from './rn.js';
import up from './up.js';

const commands = {
    add,
    cat,
    cd,
    compress,
    cp,
    decompress,
    hash,
    ls,
    mv,
    os,
    rm,
    rn,
    up,
};

export default commandName => {
    if (!commands.hasOwnProperty(commandName)) {
        throw new Error(INVALID_INPUT);
    }
    return commands[commandName];
}