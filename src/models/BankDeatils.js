import mongoose from 'mongoose';
const AccountDetailSchema=new mongoose.Schema({
      driverId:{
        type:String,
      },
    accountHolderName:{
        type:String,
       
    },
    bankAccountNo:{
        type:String,
       
    },
    ifscCode:{
        type:String,
       
    },
    branchName:{
        type:String,
       
    }
     
})
export const AccountDetailModel=mongoose.model("accountDetails",AccountDetailSchema);