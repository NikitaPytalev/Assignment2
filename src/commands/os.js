import { cpus, EOL, homedir } from 'os';

const os = async payload => {
    const arg = payload.args[0].slice(2);

    switch (arg) {
        case 'EOL':
            console.log(JSON.stringify(EOL));
            break;
        case 'cpus':
            const cpuList = cpus().map(cpu => {
                const cpuView = {
                    model: cpu.model,
                    speed: cpu.speed
                };

                return cpuView;
            });

            console.log(cpuList);
            break;
        case 'homedir':
            console.log(homedir());
            break;
    }
};

export default os;