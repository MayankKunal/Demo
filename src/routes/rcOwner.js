import express from "express";
import { updateRcOwnerOfUser } from "../controllers/rcOwnerController.js";
const router = express.Router();

router.post("/:userId", updateRcOwnerOfUser);
export { router as rcOwnerRouter};
