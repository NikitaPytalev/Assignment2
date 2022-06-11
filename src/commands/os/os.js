import { INVALID_INPUT } from '../../consts.js';
import { arch, cpus, EOL, homedir, userInfo } from 'os';

const os = async payload => {
    const arg = payload.args[0];

    switch (arg) {
        case '--EOL':
            console.log(JSON.stringify(EOL));
            break;
        case '--cpus':
            const cpuList = cpus().map(cpu => {
                const cpuView = {
                    model: cpu.model,
                    speed: cpu.speed
                };

                return cpuView;
            });

            console.log(cpuList);
            break;
        case '--homedir':
            console.log(homedir());
            break;
        case '--username':
            console.log(userInfo().username);
            break;
        case '--architecture':
            console.log(arch());
            break;
        default:
            throw new Error(INVALID_INPUT);
    }
};

export default os;