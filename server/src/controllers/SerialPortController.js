const { SerialPort, ReadlineParser  } = require('serialport')

const startMonitoring = () => {

    const port = new SerialPort({ path: 'COM3', baudRate: 9600 });
    const parser = port.pipe(new ReadlineParser());

    port.on('open', () => {
        console.log(' Serial port open');
    });

    port.on('close', () => {
        console.error(' Error: ', err.message);
    });

    parser.on('data', (data) => {
        console.log(' Data: ', data);
    });
}

module.exports = startMonitoring;


