import express from 'express';
import mongodb from "mongodb";
const mongoClient = new mongodb.MongoClient('mongodb://localhost:27017');
mongoClient.connect();
const app = express();
app.listen(8890, ()=>{
    console.log('back-end sever is runing')

})
