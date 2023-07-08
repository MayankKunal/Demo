import express from "express";


import { NotificationModel } from "../models/Notification.js";

const router=express.Router();

// console.log(formattedDate); // Output: 2023-07-08 12:34:56 (IST)

router.post('/:userId', async (req, res) => {
    try {
      const { heading, description } = req.body;
           const {userId}=req.params;
      // Create a new notification document
      const newnotification = new NotificationModel({userId,heading, description });
  
      // Save the document to the database
      await newnotification.save();
  
      res.status(201).json("Notification created");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  router.get('/:userId/',async(req,res)=>
  {
    const {userId}=req.params;
    try{

        let notifications=await NotificationModel.find({userId}).sort({"createdAt": -1});
        return res.send(notifications);
    }
    catch(error){
        res.send(error);
    }
  })
  router.delete('/:userId/:id', async (req, res) => {
    try {
      const {userId} = req.params;
      const {id}=req.params;
      // Find the notification by ID and remove it
      const notification = await NotificationModel.findOneAndDelete({ userId, _id: id });
  
      if (!notification) {
        return res.status(404).json({ error: 'Notification not found' });
      }
  
      res.status(200).json({ message: 'Notification deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete notification' });
    }
  });
export {router as notificationRouter};