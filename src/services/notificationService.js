import { NotificationModel } from "../models/Notification.js";


export const findNotificationById = async ({notificationId}) => {
  return NotificationModel.findOne({_id:notificationId});
};

export const createNotification= async (notificationData) => {
  return NotificationModel.create(notificationData);
};


export const getAllNoti = async () => {
  return NotificationModel.find({});
};

