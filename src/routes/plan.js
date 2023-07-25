import express from "express";
import { setPlan,planById,allPlans} from "../controllers/plansController.js";
const router=express.Router();

router.post('/',setPlan);
router.get('/',allPlans);
router.get("/:planId",planById);
export {router as planRouter};