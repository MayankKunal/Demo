import mongoose from 'mongoose';
const UserSchema=new mongoose.Schema({
    businessName:{
        type:String,
        required:true,
        unique:true
    },
    ownerName:{
        type:String,
        required:true
    },
    ownerMobileNo:{
        type:String,
        required:true
    },
    vehicalNo:{
        type:String,
        required:true,
    },
    ownerCumDriver:{
        type:Boolean,
        default:false
    },
    driverMobileNo:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    referralCode:{
        type:String,
        // required:true,
    },
    ownerCode:{
        type:String,
        // required:true,
    },
    channnelPartnerCode:{
        type:String,
    }
    
})
export const UserModel=mongoose.model("users",UserSchema);