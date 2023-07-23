import mongoose from 'mongoose';
const AdminSchema=new mongoose.Schema({
    adminType:{
        type:String,
        required:true,
    },

    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    emailAddress:{
        type:String,
        required:true
    },
    phoneNo:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required: true
    }
    
})
export const AdminModel=mongoose.model("AdminData",AdminSchema);