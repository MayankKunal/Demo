import mongoose from 'mongoose';
const DriverSchema=new mongoose.Schema({
    userId:{
        type: String,
     required:true
      },
    driverName:{
        type:String,
        required:true,
      
    },
    driverPhoneNumber:{
        type:String,
        required:true
    },
    driverPhoto:{
        type:Buffer,
        default:"default_image",
     },
    driverAssociatedVehicalNumber:{
        type:String,
        required:true,
     
    },
    aadhar:{
        type:String,
        required:true
    },
    
    
})
export const DriverModel=mongoose.model("driverProfile",DriverSchema);