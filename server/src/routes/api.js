const getOSInfo = require('../services/os_services/OSRecognition');

const createEndpoints = (app) => {
    app.get('/os/info', (req, res) => {
        res.json(getOSInfo(req, res)); 
    });
}

module.exports = createEndpoints;