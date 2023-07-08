import mongoose from "mongoose";
import moment from 'moment-timezone'
const NotificationSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  
  createdAt: {
    type: Date,
    default: function () {
      return moment().tz('Asia/Kolkata').toDate();
    },
  },
  updatedAt: {
    type: Date,
    default: function () {
      return moment().tz('Asia/Kolkata').toDate();
    },
  },
},
{ timestamps: true }
);
export const NotificationModel = mongoose.model('Notification', NotificationSchema);
