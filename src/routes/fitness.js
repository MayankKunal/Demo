import express from "express";

import { updateVehicalFitness } from "../controllers/fitnessController.js";


const router=express.Router();

router.patch('/:vehicalId',updateVehicalFitness);
export {router as vehicalFitnessRouter};