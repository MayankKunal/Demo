// routes/userRoutes.js
import express from "express";
import { userRegister, getUserInfo, ownerLogin } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', userRegister);
router.get('/userinfo', getUserInfo);
router.post('/ownerlogin', ownerLogin);

export { router as userRouter };
