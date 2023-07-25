import express from "express";
import { setFAQs,faqsById,allFAQs } from "../controllers/faqsControllers.js";
const router=express.Router();

router.post('/',setFAQs); //se
router.get('/',allFAQs); //getAllPlans
router.get("/:faqId",faqsById);//getPlansById
export {router as faqRouter};