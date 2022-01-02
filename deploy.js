const chalk = require('chalk');
const {NodeSSH} = require('node-ssh');

class Deploy {
    sshClient = null;
    sshKeyPath = null;

    /**
     * @param {string} sshKeyPath - path to your ssh key
     */
    constructor(sshKeyPath) {
        this.sshClient = new NodeSSH();
        this.sshKeyPath = sshKeyPath;
    }

    async deploy() {
        await this.#connectToServer();
        await this.#checkDeployStatus();
        await this.#lockDeploy();
        await this.#pullLatestChanges();
        await this.#buildDockerContainers();
        await this.#unlockDeploy();
        await this.#closeConnection();
    }

    // Connect to the server
    async #connectToServer() {
        console.log(chalk.blue.bold('Logging in ssh...'));
        await this.sshClient.connect({
            host: '159.223.7.21',
            username: 'root',
            privateKey: this.sshKeyPath,
        });
        console.log(chalk.blue.bold('Logged in!'));
    }

    // Get latest git changes
    async #pullLatestChanges() {
        console.log(chalk.green.bold('Git pull...'));
        const gitRes = await this.sshClient.execCommand('cd galamerkis && git pull');
        console.log(gitRes.stdout);
        console.log(gitRes.stderr);
        console.log(chalk.green.bold('Git pull done!'));
    }

    // Update docker containers
    async #buildDockerContainers() {
        console.log(chalk.yellow.bold('Updating docker containers...'));
        const dockerRes = await this.sshClient.execCommand('cd galamerkis && docker-compose up --build --no-deps -d');
        console.log(dockerRes.stdout);
        console.log(dockerRes.stderr);
        console.log(chalk.yellow.bold('Docker containers updated!'));
    }

    // Check whether there is a deployment in process already
    async #checkDeployStatus() {
        const {stdout: deployInProcess} = await this.sshClient.execCommand('test -f deploy && echo "exists"');

        if (!deployInProcess) {
            return;
        }

        console.log(chalk.red.bold('Deploy already in process! Exiting...'));
        await this.sshClient.execCommand('exit');
        return process.exit(0);
    }

    async #lockDeploy() {
        console.log(chalk.red.bold('Deploy locked!'));
        await this.sshClient.execCommand('touch deploy');
    }

    async #unlockDeploy() {
        await this.sshClient.execCommand('rm deploy');
        console.log(chalk.red.bold('Deploy unlocked!'));
    }

    async #closeConnection() {
        await this.sshClient.execCommand('exit');
        console.log(chalk.green.bold('Connection closed!'));
        process.exit(0);
    }
}

const [, , sshKeyPath] = process.argv;
(async () => await new Deploy(sshKeyPath).deploy())();