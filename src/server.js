import express from 'express'
import mongoose from "mongoose"

import cors from 'cors'
import 'dotenv/config'
const app=express();
import { userRouter } from './routes/user.js';
import { notificationRouter } from './routes/notification.js';
app.use(express.json());
app.use(cors());
// const { MongoClient } = require('mongodb');

// const uri = process.env.MONGO_URI 
mongoose.connect(process.env.MONGO_URI , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Perform database operations
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });


app.get('/',(req,res)=>
{
    res.send('<h1>Hello World</h1>')
});
app.use('/auth',userRouter);
app.use('/notification',notificationRouter)
const PORT=process.env.port||4000;
app.listen(PORT,()=>
{
    console.log(`app is running on ${PORT}`);
})