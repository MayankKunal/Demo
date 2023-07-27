import mongoose from 'mongoose';
const TicketSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    initiatedDate:{
        type:Date,
        default:Date.now,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    remarks:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
    },
   
    
})
export const TicketModel=mongoose.model("Tickets",TicketSchema);