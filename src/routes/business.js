import express from "express";
import { updateBusinessProfile,getBusinessProfile,getAllBusiness} from "../controllers/businessController.js";
const router = express.Router();

router.post("/:userId", updateBusinessProfile);
router.get('/:userId', getBusinessProfile);
router.get("/",getAllBusiness);
export { router as businessRouter };
