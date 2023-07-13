import express from "express";
import { DriverModel } from "../models/DriverProfile.js";


const router=express.Router();

router.post('/:userId',async(req,res)=>
{
    try {
        const {driverName,driverPhoneNumber,driverAssociatedVehicalNumber,aadhar} = req.body;
             const {userId}=req.params;
        
        const newDriverProfile = new DriverModel({userId,driverName,driverPhoneNumber,driverAssociatedVehicalNumber,aadhar});
    
       
        await newDriverProfile.save();
    
        res.status(201).json("Driver Profile Created");
      } catch (err) {
        res.status(500).json(err);
      }
})
router.get('/:userId',async(req,res)=>
{
  const {userId}=req.params;
  try{

      let driverProfile=await DriverModel.find({userId}).sort({"createdAt": -1});
      return res.send(driverProfile);
  }
  catch(error){
      res.send(error);
  }
})
export {router as driverProfileRouter};