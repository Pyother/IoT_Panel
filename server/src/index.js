// * Modules imports:
const express = require('express');
const path = require('path');
const cors = require('cors');
const { createServer } = require('http');
const { Server } = require('socket.io');

// * Services and controllers:
const createEndpoints = require('./routes/api');
const wsController = require('./controllers/WebSocketController');

// * Utils:
const logWithColor = require('./utils/logWithColor');

// * Global object and variables:
const app = express();
const server = createServer(app);
const io = new Server(server);

// * Middlewares:
app.use(express.static(path.join(__dirname, '../../client/dist/app/browser')));
app.use(cors());

server.listen(process.env.PORT || 3000, () => {
    console.log(' App: http://localhost:3000/');
    logWithColor("IoT Panel started ✅", "green");
    createEndpoints(app);
    wsController(io);
});
