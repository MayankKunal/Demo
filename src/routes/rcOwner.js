import express from "express";
import { RcOwnerModel } from "../models/RcOwner.js";

const router=express.Router();

router.post('/:userId',async(req,res)=>
{
    try {
        const {rcOwnerMobileNo,gstNumber,panNumber,businessOwnerAdhar,ownerCumDriver,leasedVehical,channelPartner,agreedSaasContactAgreement,image} = req.body;
             const {userId}=req.params;
        
        const newRcOwner = new RcOwnerModel({userId,rcOwnerMobileNo,gstNumber,panNumber,businessOwnerAdhar,ownerCumDriver,leasedVehical,channelPartner,agreedSaasContactAgreement,image });
    
       
        await newRcOwner.save();
    
        res.status(201).json("rcOwner Created");
      } catch (err) {
        res.status(500).json(err);
      }
})
router.get('/:userId',async(req,res)=>
{
  const {userId}=req.params;
  try{

      let rcOwner=await RcOwnerModel.find({userId}).sort({"createdAt": -1});
      return res.send(rcOwner);
  }
  catch(error){
      res.send(error);
  }
})
export {router as rcOwnerRouter};