import add from './add.js';
import cat from './cat.js';
import cd from './cd.js';
import cp from './cp.js';
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
    cp,
    hash,
    ls,
    mv,
    os,
    rm,
    rn,
    up,
};

export default commandName => {
    return commands[commandName];
}