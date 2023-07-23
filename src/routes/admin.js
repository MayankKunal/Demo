import express from "express";
import { getAdminData,updateAdmin,deleteAdmin,adminRegister} from "../controllers/adminController";
const router=express.Router();


router.post('/',adminRegister);
router.patch("/:adminId",updateAdmin);
router.delete("/:adminId",deleteAdmin);
router.get('/',getAdminData);
export {router as adminRouter};