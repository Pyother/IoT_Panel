const logWithColor = require('../utils/logWithColor');
const mqtt = require("mqtt");

const wsController = (io) => {

    const broker = "mqtt://test.mosquitto.org";
    const topic = "IoTPanel";
    const client = mqtt.connect(broker);

    client.on("connect", () => {
        client.subscribe(topic, (err) => {
            if (!err) {
                logWithColor(" ✅ Connected to " + topic + " (MQTT broker)", "green");
                client.publish(topic, "connection_request");
            }
        });
    });

    io.on('connection', (socket) => {
        logWithColor("Socket.io started ✅", "magenta");
        socket.emit('message', 'Hello from server! 🌍');

        socket.on('message', (msg) => {
            logWithColor(`Socket.io message: ${msg} ✉️`, "magenta");
        });

        client.on("message", (topic, message) => {
            const messageString = message.toString();
            logWithColor(" Message: " + messageString, "cyan");
            socket.emit('position_update', messageString);
        });
    });
}

module.exports = wsController;