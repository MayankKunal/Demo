import express from "express";
import { UserModel } from "../models/Users.js";
import bcrypt from 'bcrypt'
const router=express.Router();

router.post('/register',async(req,res)=>
{
    const{businessName,ownerName,ownerMobileNo,
        vehicalNo,ownerCumDriver,
        driverMobileNo,password,referralCode,
        ownerCode,
        channnelPartnerCode}=req.body;

        const user=await UserModel.findOne({businessName});
        if(user)
        {
            return res.json({message:"Bussiness Name alredy Exist"});
        }
        const hasedPassword=await bcrypt.hash(password,10);
        const newUser=new UserModel({businessName,ownerName,ownerMobileNo,
            vehicalNo,ownerCumDriver,
            driverMobileNo,password:hasedPassword,referralCode,
            ownerCode,
            channnelPartnerCode});
            await newUser.save();
            res.json({message:"UserRegistered Successfully"});
})
router.get('/userinfo',async(req,res)=>
{
    try{
        
        const user=await UserModel.find({});
      if(user)
      {
        
      res.status(200).json(user);
      }
      else{
        res.status(404).json({message:"User Not Found"})
      }
    }
    catch (err){
      res.status(500).json(err);
    }
})
router.post('/ownerlogin',async(req,res)=>
{
    
    const {ownerMobileNo,password}=req.body;
    const user=await UserModel.findOne({ownerMobileNo});
    if(!user)
    {
        return res.json({message:"User Does not exist"});
    }
    const isValid=await bcrypt.compare(password,user.password);
    if(!isValid)
    {
        return res.json({message:"username or password is incorrect!"});
    }
    res.json({user:user._id});

})
export {router as userRouter};