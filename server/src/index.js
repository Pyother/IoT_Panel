// * Modules imports:
const express = require('express');
const path = require('path');
const cors = require('cors');

// * Services and controllers:
const createEndpoints = require('./routes/api');
const setupDB = require('../config/mongoDBModule');
const mqttController = require('../src/controllers/MQTTClientController');

// * Utils:
const logWithColor = require('./utils/logWithColor');

// * Global object and variables:
const app = express();

app.use(express.static(path.join(__dirname, '../../client/dist/app/browser')));
app.use(cors());

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '../../client/dist/app/browser/index.html'));
});

app.listen(process.env.PORT || 3000, () => {
    console.log(' App: http://localhost:3000/');
    logWithColor("✅ IoT Panel started", "green");
    createEndpoints(app);
    mqttController('mqtt://test.mosquitto.org', 'IotPanel');
    //setupDB();
});
