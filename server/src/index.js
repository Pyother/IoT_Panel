const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const start = require('./app.js');
const createEndpoints = require('./routes/api');
const setupDB = require('../config/mongoDBModule');

app.use(express.static(path.join(__dirname, '../../client/dist/app/browser')));
app.use(cors());

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '../../client/dist/app/browser/index.html'));
});

app.listen(process.env.PORT || 3000, () => {
    console.log(' App: http://localhost:3000/');
    createEndpoints(app);
    start();
    setupDB();
});
