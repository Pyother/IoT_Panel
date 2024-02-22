const express = require('express');
const path = require('path'); 
const app = express();
const start = require('./app.js');

app.use(express.static(path.join(__dirname, '../../client/app/dist/app/browser')));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '../../client/app/dist/app/browser/index.html'));
});

app.listen(process.env.PORT || 3000, () => {
    console.log(' App: http://localhost:3000/');
    start();
});
