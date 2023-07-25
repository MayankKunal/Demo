import mongoose from 'mongoose';
const FaqsSchema=new mongoose.Schema({
   question:{
    type:String,
    required:true
   },
   answer:{
    type:String,
    required:true
   }
    
})
export const FAQsModel=mongoose.model("FAQs",FaqsSchema);