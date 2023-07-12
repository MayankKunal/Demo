import mongoose from 'mongoose';
const BusinessSchema=new mongoose.Schema({
    userId:{
        type: String,
     required:true
      },
    businessName:{
        type:String,
        required:true,
        unique:true
    },
    ownerName:{
        type:String,
        required:true
    },
    image:{
       type:Buffer,
       default:"default_image",
       

    }
    
    
})
export const BusinessModel=mongoose.model("business",BusinessSchema);