

import {findNotificationById,createNotification,getAllNoti} from "../services/notificationService.js";


// console.log(formattedDate); // Output: 2023-07-08 12:34:56 (IST)

export const setNotification=async (req, res) => {
    try {
      const {description,type,field} = req.body;
      // Create a new notification document
      const newnotification = await createNotification({description,type,field})
  
      // Save the document to the database
      await newnotification.save();
  
      res.status(201).json("Notification created");
    } catch (err) {
      res.status(500).json(err);
    }
  };
export const getNotificationById=async(req,res)=>
  {
    const {notificationId}=req.params;
    try{

        let notification=await findNotificationById({notificationId})
        if(notification)
        return res.status(200).send(notification);
        else{
          return res.status(404).send({message:"Notification Not Found"});
        }
    }
    catch(error){
        res.status(500).send(error);
    }
  }
export const getAllNotification=async (req, res) => {
    try {
  
      // Find the notification by ID and remove it
      const notification = await getAllNoti();
  
      if (!notification) {
        return res.status(404).json({ error: 'Notification not found' });
      }
      res.status(200).json(notification);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch notification' });
    }
  }