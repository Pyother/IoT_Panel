// * Required imports:
const { MongoClient } = require('mongodb');
const readline = require('readline');
const logWithColor = require('../src/utils/logWithColor');
const createDocument = require('../src/services/db_services/createDocument');

// * Global variables:
const dbname = 'iot-panel-db';
const collection_name = 'tasks';
let client;
let collection;
let uri;

const enterPassword = async () => {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve, reject) => {
        rl.question(' Enter password for the database: ', (password) => {
            uri = `mongodb+srv://pyother:${password}@cluster0.2cefazn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
            rl.close();
            resolve();
        });
    });
}

const connectToDatabase = async () => {
    try {
        await client.connect();
        logWithColor('✅ Database connected', 'green');
    } catch (err) {
        console.error("Error connecting to the database", err); 
    }
};

// * Main function:
const setupDB = async () => {
    await enterPassword();

    // Client initialization (only one instance): 
    client = new MongoClient(uri);
    collection = client.db(dbname).collection(collection_name);

    await connectToDatabase();

    createDocument().then((document) => {
        collection.insertOne(document);
        const documentString = JSON.stringify(document, null, 2);
        logWithColor(`Document created and inserted into the database ✅ \n\n ${documentString}`, 'green');
    });
}

module.exports = setupDB;



