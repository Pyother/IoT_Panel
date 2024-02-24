const os = require('os');

const getOSInfo = () => {
    return {
        platform: os.platform(),
        arch: os.arch(),
        cpus: os.cpus(),
        networkInterfaces: os.networkInterfaces()
    }
}

module.exports = getOSInfo;