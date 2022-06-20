const connection = require('../connection/connectionData');
const arr = require('../DataGenerator/dataGenerator');

async function main(client) {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(connection.dbName);

    db.listCollections({ name: connection.collName })
        .next(function (err, collinfo) {
            if (!collinfo) {
                db.createCollection(connection.collName, {
                    max: 10000,
                    size: 10000000,
                    capped: true
                });
            }
        }
    );
    const collection = db.collection(connection.collName);
    const insertResult = await collection.insertMany([...arr]);
    console.log('Inserted documents =>', insertResult);
    return 'done.';
}

module.exports = main;