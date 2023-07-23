
import { AdminModel } from "../models/Admin.js";
import bcrypt from 'bcrypt'
export const adminRegister=async(req,res)=>
{
    try{
    const {adminType,firstName,lastName,emailAddress,phoneNo,password}=req.body;

    const hasedPassword=await bcrypt.hash(password,10);
    
    const newAdmin=new AdminModel({adminType,firstName,lastName,emailAddress,phoneNo,password:hasedPassword});
    await newAdmin.save();
    res.status(200).json({message:"Admin Registered Successfully"});
    }
    catch(err)
    {
        res.status(500).json(err);
    }
}

export const updateAdmin=async(req,res)=>
{
    try{
        const {adminId}=req.params;
        const {adminType,firstName,lastName,emailAddress,phoneNo}=req.body;

        const admin=await AdminModel.findById({_id:adminId});
        admin.set({
           adminType,firstName,lastName,phoneNo,emailAddress
        }) 
        admin.save();
        return  res.status(200).json(admin);
    }
    catch(err)
    {
      res.status(500).json(err);
    }
}
export const deleteAdmin=async(req,res)=>
{
    try{
        const {adminId}=req.params;
      await AdminModel.findByIdAndDelete({_id:adminId});
        return   res.status(200).json("Deleted");

    }
    catch(err)
    {
        return res.status(500).json(err);
    }
}


export const getAdminData=async(req,res)=>
{
  try{
          const adminData=await AdminModel.find({});
          if(adminData)
          {
            res.status(200).json(adminData);
        }
        else{
          res.status(404).json({message:"Admin Not Found"})
        }
  }
  catch(err)
  {
    res.status(500).json(err);
  }
}
