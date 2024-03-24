const logWithColor = require('./utils/logWithColor');
const startMonitoring = require('./controllers/SerialPortController');
const mqttController = require('./controllers/MQTTClientController');
const getOsInfo = require('./services/os_services/OSRecognition');
const test = require('./test');

const start = () => {
    logWithColor("IoT Panel started ✓", "green");
    test();
    //console.log(getOsInfo());
    //startMonitoring();
    //mqttController('mqtt://test.mosquitto.org', 'AreaExplorer');
};

module.exports = start;
