const mqtt = require("mqtt");
const logWithColor = require("../utils/logWithColor");

const mqttController = (broker, topic) => {
    const client = mqtt.connect(broker);

    client.on("connect", () => {
        client.subscribe(topic, (err) => {
            if (!err) {
                logWithColor(" Connected to " + topic, "bgGreen");
            }
        });
    });

    client.on("message", (topic, message) => {
        console.log(" Message: ", message.toString());
    });
}

module.exports = mqttController;