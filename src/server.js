import express from 'express'
import mongoose from "mongoose"
import fs from 'fs';
import path from 'path';
import multer from "multer"
import cors from 'cors'
import 'dotenv/config'
const app=express();
// import { userRouter } from './routes/user.js';
// import { userRouter } from './controllers/user.controller.js';
// import {router} from './controllers/user.controller.js';
// import { userRouter } from './controllers/user.controller.js';
// import { userRouter } from './controllers/user.controller.js';
import { userRouter } from './routes/user.js';
import { notificationRouter } from './routes/notification.js';
//Owner Routes
import { businessRouter } from './routes/business.js';
import { rcOwnerRouter } from './routes/rcOwner.js';
//Driver Profille Routes
import { driverProfileRouter } from './routes/driverProfile.js';
import { drivingLicenceRouter } from './routes/drivingLicence.js';
//vehical Profile Routes
import { vehicalProfileRouter } from './routes/vehicalProfile.js';
import { vehicalFitnessRouter } from './routes/fitness.js';
import { vehicalInsuranceRouter } from './routes/vehicalInsurance.js';
// import { vehicalPermitsRouter } from './routes/vehicALpERMIT.JS';
import { vehicalPermitsRouter } from './routes/vehicalPermits.js';
import { vehicalEmissionRouter } from './routes/emission.js';
import { vehicalStateandRtoRouter } from './routes/stateandRto.js';
//acount Details
import { accountDetailRouter } from './routes/accountDetail.js';

//admin detail
import { adminRouter } from './routes/admin.js';

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
app.use('/rcOwner',rcOwnerRouter);
//driver routes
app.use('/diverProfile',driverProfileRouter);
app.use('/drivingLicence',drivingLicenceRouter);
//vehical routes
app.use('/vehicalProfile',vehicalProfileRouter);
app.use('/vehicalFitness',vehicalFitnessRouter);
app.use('/vehicalInsurance',vehicalInsuranceRouter);
app.use('/vehicalPermit',vehicalPermitsRouter);
app.use('/vehicalEmission',vehicalEmissionRouter);
app.use('/vehicalTax',vehicalStateandRtoRouter);
//account Routes
app.use('/accountDetail',accountDetailRouter);
app.use("/admin",adminRouter);
const PORT=process.env.port||4000;
app.listen(PORT,()=>
{
    console.log(`app is running on ${PORT}`);
})