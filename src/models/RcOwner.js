import mongoose from 'mongoose';
const RcOwnerSchema=new mongoose.Schema({
    userId:{
        type: String,
     required:true
      },
    rcOwnerMobileNo:{
        type:String,
        required:true,
      
    },
    gstNumber:{
        type:String,
        required:true
    },
    businessOwnerAdhar:{
        type:String,
        required:true,
     
    },
    panNumber:{
        type:String,
        required:true
    },
    ownerCumDriver:{
        type:Boolean,
        required:true
    },
    leasedVehical:{
        type:Boolean,
        required:true
    },
    channelPartner:{
        type:Boolean,
        required:true
    },
    agreedSaasContactAgreement:{
        type:Boolean,
        required:true
    },
    image:{
        type:Buffer,
        default:"default_image",
     }
    
    
})
export const RcOwnerModel=mongoose.model("rcOwner",RcOwnerSchema);