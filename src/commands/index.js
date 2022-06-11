import cd from './cd.js';
import ls from './ls.js';
import up from './up.js';

const commands = {
    cd,
    ls,
    up,
};

export default commandName => {
    return commands[commandName];
}