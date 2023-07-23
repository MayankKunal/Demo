import express from "express";

import { getAccountDetail,setAccountDetail} from "../controllers/accountDetailController";


const router=express.Router();

router.patch('/:driverId',setAccountDetail);
router.get('/:driverId',getAccountDetail);
export {router as accountDetailRouter};