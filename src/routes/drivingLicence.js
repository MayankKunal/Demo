import express from "express";

import {drivingLicencUpdate,getDriverDrivingLicne} from "../controllers/driverLicenceController.js";

const router=express.Router();

router.patch('/:driverId',drivingLicencUpdate);

router.get('/:userId',getDriverDrivingLicne);
export {router as drivingLicenceRouter};

