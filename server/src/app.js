const logWithColor = require('./utils/logWithColor');
const startMonitoring = require('./controllers/SerialPortController');
const mqttController = require('./controllers/MQTTClientController');

const start = () => {
    logWithColor("IoT Panel started ✓", "green");
    //startMonitoring();
    mqttController('mqtt://test.mosquitto.org', 'AreaExplorer');
};

module.exports = start;