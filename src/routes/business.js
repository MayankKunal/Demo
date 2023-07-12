import express from "express";
import { BusinessModel } from "../models/BussinessProfile.js";

const router=express.Router();

router.post('/:userId',async(req,res)=>
{
    try {
        const {businessName, ownerName} = req.body;
             const {userId}=req.params;
        
        const newbusiness = new BusinessModel({userId,businessName,ownerName });
    
       
        await newbusiness.save();
    
        res.status(201).json("Businesss Created");
      } catch (err) {
        res.status(500).json(err);
      }
})
router.get('/:userId',async(req,res)=>
{
  const {userId}=req.params;
  try{

      let business=await BusinessModel.find({userId}).sort({"createdAt": -1});
      return res.send(business);
  }
  catch(error){
      res.send(error);
  }
})
export {router as businessRouter};