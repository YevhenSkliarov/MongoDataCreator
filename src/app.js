const { MongoClient } = require('mongodb');
const arr = require('../src/DataGenerator/dataGenerator')
// Connection URL
const url = 'mongodb://user:password@localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'db-name';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  db.createCollection('test', {
      max:10000,
      size:10000000,
      capped:true
  });
  const collection = db.collection('test');
  const insertResult = await collection.insertMany([...arr]);
  console.log('Inserted documents =>', insertResult);
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
