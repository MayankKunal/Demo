import express from "express";

import { vehicalPermitUpdate } from "../controllers/vehicalPermitController.js";


const router=express.Router();

router.patch('/:vehicalId',vehicalPermitUpdate);
export {router as vehicalPermitsRouter};