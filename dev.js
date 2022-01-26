const util = require('util');
const {exec} = require('child_process');

const run = util.promisify(exec);

class DeveloperEnvironment {
    async setup() {
        await this.installDependencies();
        await this.removeDocker();
        await this.buildDocker();
        await this.startDocker();
    }

    async stop() {
        console.log('Stopping containers...');
        const res = await run('docker-compose -f docker-compose.dev.yml stop');
        console.log(res.stdout || res.stderr);
        console.log('Containers stopped!');
    }

    async start() {
        await this.startDocker();
    }

    async restart() {
        console.log('Restarting containers...');
        const res = await run('docker-compose -f docker-compose.dev.yml restart');
        console.log(res.stdout || res.stderr);
        console.log('Containers restarted!');
    }

    async update() {
        console.log('Updating environment...');
        const git = await run('git pull');
        console.log(git.stdout);
        console.log(git.stderr);
        const docker = await run('docker-compose -f docker-compose.dev.yml up -d');
        console.log(docker.stdout);
        console.log(docker.stderr);
        console.log('Environment updated!');
    }

    async removeDocker() {
        console.log('Removing containers...');
        const res = await run('docker-compose -f docker-compose.dev.yml down');
        console.log(res.stdout || res.stderr);
        console.log('Containers removed!');
    }

    async buildDocker() {
        console.log('Building containers... This will take a while...');
        const res = await run('docker-compose -f docker-compose.dev.yml build --no-cache');
        console.log(res.stdout || res.stderr);
        console.log('Containers built!');

    }

    async startDocker() {
        console.log('Starting up docker containers...');
        const res = await run('docker-compose -f docker-compose.dev.yml up -d');
        console.log(res.stdout || res.stderr);
        console.log('Everything is up and running! Hopefully...');
    }

    async installDependencies() {
        console.log('Installing base dependencies...');
        await run('npm i');
        console.log('Done!');
    }
}

const [, , cmd] = process.argv;

const validCommands = ['setup', 'start', 'restart', 'stop', 'update'];

if (!validCommands.includes(cmd)) {
    return console.log(`Invalid command!\nAvailable commands: ${validCommands.join(', ')}`)
}

(() => (new DeveloperEnvironment())[cmd]())();