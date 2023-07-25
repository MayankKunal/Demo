import express from "express";

import { setNotification,getAllNotification,getNotificationById } from "../controllers/notificationController.js";

const router=express.Router();

// console.log(formattedDate); // Output: 2023-07-08 12:34:56 (IST)

router.post("/",setNotification);
router.get("/:notificationId",getNotificationById);
router.get("/",getAllNotification);
export {router as notificationRouter};