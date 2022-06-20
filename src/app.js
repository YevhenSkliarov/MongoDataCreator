const main = require('../src/connection/connector');
const connection = require('../src/connection/connectionData');
const { MongoClient } = require('mongodb');

const client = new MongoClient(connection.url);
main(client)
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
