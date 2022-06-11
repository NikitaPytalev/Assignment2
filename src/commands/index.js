import cat from './cat.js';
import cd from './cd.js';
import ls from './ls.js';
import up from './up.js';

const commands = {
    cat,
    cd,
    ls,
    up,
};

export default commandName => {
    return commands[commandName];
}