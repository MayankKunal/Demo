import express from "express";

import { UpdateVehicalEmission } from "../controllers/emissionController.js";


const router=express.Router();

router.patch('/:vehicalId',UpdateVehicalEmission)
export {router as vehicalEmissionRouter};