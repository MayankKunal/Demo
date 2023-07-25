import mongoose from 'mongoose';
const PlanSchema=new mongoose.Schema({
    planName:{
        type:String,
        required:true,
    },

    planDetails:{
        type:String,
        required:true
    },
    planAmount:{
        type:String,
        required:true
    },
    planDesc:{
        type:String,
        required:true
    },
    planDuration:{
        type:String,
        required:true,
    },
    
})
export const PlanModel=mongoose.model("Plans",PlanSchema);