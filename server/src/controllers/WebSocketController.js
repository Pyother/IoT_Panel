const logWithColor = require('../utils/logWithColor');

const wsController = (io) => {
    io.on('connection', (socket) => {
        logWithColor("Socket.io started ✅", "magenta");
        socket.emit('message', 'Hello from server! 🌍');

        socket.on('message', (msg) => {
            logWithColor(`Socket.io message: ${msg} ✉️`, "magenta");
        });
    });
}

module.exports = wsController;