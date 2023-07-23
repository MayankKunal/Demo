import express from "express";
import {getDriverProfile,driverLogin,updateDriverProfile,allDriverProfile} from "../controllers/driverProfileController.js";
const router = express.Router();

router.post('/driverlogin', driverLogin);
router.patch('/:driverId', updateDriverProfile);
router.get('/:driverId', getDriverProfile);
router.get("/",allDriverProfile);

export { router as driverProfileRouter };
