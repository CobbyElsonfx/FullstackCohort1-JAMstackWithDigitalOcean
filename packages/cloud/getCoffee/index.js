const { MongoClient } = require('mongodb');

const url = process.env['DB_URL'];
const client = new MongoClient(url);

async function main() {
    await client.connect();
    const data = await client.db("jamstack-db").collection('coffee').find().toArray()
    return {
        "body": data
    }
}

exports.main = main