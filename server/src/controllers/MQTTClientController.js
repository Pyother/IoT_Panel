const mqtt = require("mqtt");
const logWithColor = require("../utils/logWithColor");

const mqttController = (broker, topic) => {

    const client = mqtt.connect(broker);

    client.on("connect", () => {
        client.subscribe(topic, (err) => {
            if (!err) {
                logWithColor(" ✅ Connected to " + topic + " (MQTT broker)", "green");
                client.publish(topic, "connection_request");
            }
        });
    });

    client.on("message", (topic, message) => {

        const messageString = message.toString();

        console.log(" Message: ", messageString);

        if(messageString === "ok") {
            console.log("Connection established");
        }

    });
}

module.exports = mqttController;