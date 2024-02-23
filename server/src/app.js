const logWithColor = require('./utils/logWithColor');
const startMonitoring = require('./controllers/SerialPortController');

const start = () => {
    logWithColor("IoT Panel started ✓", "green");
    startMonitoring();
};

module.exports = start;