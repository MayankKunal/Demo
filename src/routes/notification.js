import express from "express";


import { NotificationModel } from "../models/Notification.js";

const router=express.Router();

// console.log(formattedDate); // Output: 2023-07-08 12:34:56 (IST)

router.post('/', async (req, res) => {
    try {
      const { heading, description } = req.body;
  
      // Create a new notification document
      const newnotification = new NotificationModel({ heading, description });
  
      // Save the document to the database
      await newnotification.save();
  
      res.status(201).json("Notification created");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  router.get('/',async(req,res)=>
  {
    try{
        let notifications=await NotificationModel.find().sort({"createdAt": -1});
        return res.send(notifications);
    }
    catch(error){
        res.send(error);
    }
  })
  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      // Find the notification by ID and remove it
      const notification = await NotificationModel.findByIdAndRemove(id);
  
      if (!notification) {
        return res.status(404).json({ error: 'Notification not found' });
      }
  
      res.status(200).json({ message: 'Notification deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete notification' });
    }
  });
export {router as notificationRouter};