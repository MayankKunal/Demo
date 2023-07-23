import mongoose from 'mongoose';
const BusinessSchema=new mongoose.Schema({
    userId:{
        type: String,
     required:true
      },
    businessName:{
        type:String,
    },
    ownerName:{
        type:String,
        
    },
    ownerImage:{
       type:Buffer,
    },
    ownerMobileNo:{
        type:String,
        
      
    },
    gstNumber:{
        type:String,
        
    },  
    businessOwnerAdhar:{
        type:String,
    
    },
    panNumber:{
        type:String,
        
    },
    ownerCumDriver:{
        type:Boolean,
        
    },
    leasedVehical:{
        type:Boolean,
    },
    fleetOwner:{
        type:Boolean,
    },
    channelPartner:{
        type:Boolean,
    },
    agreedSaasContactAgreement:{
        type:Boolean,
    },
    
    
    
    
})
export const BusinessModel=mongoose.model("business",BusinessSchema);