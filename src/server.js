import express from 'express'
import mongoose from "mongoose"

import cors from 'cors'
import 'dotenv/config'
const app=express();
import { userRouter } from './routes/user.js';
import { notificationRouter } from './routes/notification.js';
import { businessRouter } from './routes/business.js';
app.use(express.json());
app.use(cors());
// const { MongoClient } = require('mongodb');

// const uri = process.env.MONGO_URI 

async function connectToDatabase() {
  // MongoDB connection string
  const connectionString =  process.env.MONGO_URI;

  try {
    // Connect to the database
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Connection error:", error);
  }
}

connectToDatabase();

app.get('/',(req,res)=>
{
    res.send('<h1>Hello World</h1>')
});
app.use('/auth',userRouter);
app.use('/notification',notificationRouter)
app.use('/business',businessRouter);
const PORT=process.env.port||4000;
app.listen(PORT,()=>
{
    console.log(`app is running on ${PORT}`);
})