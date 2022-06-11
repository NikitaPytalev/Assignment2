import add from './add.js';
import cat from './cat.js';
import cd from './cd.js';
import cp from './cp.js';
import ls from './ls.js';
import rm from './rm.js';
import rn from './rn.js';
import up from './up.js';

const commands = {
    add,
    cat,
    cd,
    cp,
    ls,
    rm,
    rn,
    up,
};

export default commandName => {
    return commands[commandName];
}