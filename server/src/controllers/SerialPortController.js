const { SerialPort, ReadlineParser  } = require('serialport')

const startMonitoring = () => {

    const port = new SerialPort({ path: 'COM3', baudRate: 9600 });
    const parser = port.pipe(new ReadlineParser());

    printAvailablePorts();

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

const printAvailablePorts = async () => {
    try {
        const ports = await SerialPort.list();
        console.log(' Available serial ports:');
        ports.forEach((port) => {
            console.log(` - ${port.path}`);
        });
    } catch (error) {
        console.error('Error:', error);
    }
};

module.exports = startMonitoring;


