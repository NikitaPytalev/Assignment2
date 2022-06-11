import { EOL } from 'os';

const os = async payload => {
    const arg = payload.args[0].slice(2);

    switch (arg) {
        case 'EOL':
            console.log(JSON.stringify(EOL));
            break;
    }
};

export default os;