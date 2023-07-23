import express from "express";

import {vehicalProfileUpdate,getvehicalProfile} from "../controllers/vehicalController.js";

const router=express.Router();

router.patch('/:vehicalId',vehicalProfileUpdate)
router.get('/:vehicalId',getvehicalProfile);
export {router as vehicalProfileRouter};