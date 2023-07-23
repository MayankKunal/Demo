import express from "express";
import { vehicalInsuranceUpdate} from "../controllers/vehicalInsuranceController.js";
const router=express.Router();

router.patch('/:vehicalId',vehicalInsuranceUpdate);

export {router as vehicalInsuranceRouter};