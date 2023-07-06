import express from "express";
import { UserModel } from "../models/Users.js";

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
        const newUser=new UserModel({businessName,ownerName,ownerMobileNo,
            vehicalNo,ownerCumDriver,
            driverMobileNo,password,referralCode,
            ownerCode,
            channnelPartnerCode});
            await newUser.save();
            res.json({message:"UserRegistered Successfully"});
})
export {router as userRouter};