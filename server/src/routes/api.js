const getOSInfo = require('../services/os_services/OSRecognition');

const createEndpoints = (app) => {

    app.get('/', (request, response) => {
        response.sendFile(path.join(__dirname, '../../../client/dist/app/browser/index.html'));
    });

    app.get('/os/info', (req, res) => {
        res.json(getOSInfo(req, res)); 
    });
}

module.exports = createEndpoints;