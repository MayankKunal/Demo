import mongoose from "mongoose";
const NotificationSchema = new mongoose.Schema({
  
  description: {
    type: String,
    required: true,
  },
  type:{
    type:String,
    required:true,
  },
  field:{
    type:String,
    required:true
  }
}
);
export const NotificationModel = mongoose.model('Notification', NotificationSchema);
