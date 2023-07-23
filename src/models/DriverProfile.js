import mongoose from 'mongoose';
const DriverSchema=new mongoose.Schema({
    userId:{
        type: String,
      },
    driverName:{
        type:String,
    },
    driverMobileNo:{
        type:String,
         
    },
    driverPhoto:{
        type:Buffer,
        default:"default_image",
     },
    driverAssociatedVehicalNumber:{
        type:String,
         
     
    },
    driverAadharNo:{
        type:String,
         
    },
    driverPassword:{
        type:String,
    },
    drivingLicenceNo:{
        type:String,
    },
    drivingLicenceValidity:{
        type:String,
    },
    badgeNo:{
        type:String,
    },
    badgeValidity:{
        type:String
    },
    fatherName:{
        type:String
    },
    dateOfBirth:{
        type:String
    },
    stateandRto:{
        type:String
    },
    drivingLicenceImage:{
        data: Buffer, contentType: String
    }
    
})
export const DriverModel=mongoose.model("driverProfile",DriverSchema);