import add from './add.js';
import cat from './cat.js';
import cd from './cd.js';
import ls from './ls.js';
import rn from './rn.js';
import up from './up.js';

const commands = {
    add,
    cat,
    cd,
    ls,
    rn,
    up,
};

export default commandName => {
    return commands[commandName];
}