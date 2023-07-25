import express from 'express'
import mongoose from "mongoose"
import fs from 'fs';
import path from 'path';
import multer from "multer"
import cors from 'cors'
import 'dotenv/config'
const app=express();
import { userRouter } from './routes/user.js';
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

//Plans

import { planRouter } from './routes/plan.js';

//FAQS
import { faqRouter } from "./routes/faqs.js";
//Tickets
import { ticketRouter } from './routes/ticket.js';

//notification
import { notificationRouter } from './routes/notification.js';

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
//admin Routes
app.use("/admin",adminRouter);

//Plan Routes
app.use("/plan",planRouter);
//faqs Routes
app.use("/faqs",faqRouter);
//
app.use("/ticket",ticketRouter);
//
app.use("/notification",notificationRouter);

const PORT=process.env.port||4000;
app.listen(PORT,()=>
{
    console.log(`app is running on ${PORT}`);
})