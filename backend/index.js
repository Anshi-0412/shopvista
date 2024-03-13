const express = require("express");
const mongoose = require("mongoose")

const app = express();
// const { MongoClient } = require('mongodb');

const PORT = 3000;
// const uri = "mongodb+srv://Anshi-0412:kimseokjin0412@cluster0.mzphnla.mongodb.net/?retryWrites=true&w=majority";
// const dbName = 'shopvista';

//   async function run() {
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();
//         const db = client.db(dbName);
//         const collection = db.collection('shopvista');
//         const result = await collection.insertOne({ name: 'Anshika', age: 21});
//         console.log ('Done!!!');
//     } catch (error) {
//         console.log('Error');
//     } finally {
//         await client.close();-
//     }

// }   

// run().catch(console.error);

// Start server
app.listen(PORT, () => {
    console.log('Server connected')
}); 
