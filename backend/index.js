const express = require("express");
const mongoose = require("mongoose")

const app = express();
const { MongoClient } = require('mongodb');

const PORT = 3000;
const uri = "mongodb+srv://Anshika0412:anshika04@shopcluster.cwb4tit.mongodb.net/?retryWrites=true&w=majority&appName=ShopCluster";
const dbName = 'Shopvista';

 async function run() {
     const client = new MongoClient(uri);
try {
         await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('shopvista');
       const result = await collection.insertOne({ name: 'Anshika', age: 21});
      console.log ('Done!!!');
     } catch (error) {
        console.log('Error');
     } finally {
        await client.close();
    }

 }   

run().catch(console.error);

// Start server
app.listen(PORT, () => {
    console.log('Server connected')
}); 
