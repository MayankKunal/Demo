import express from "express";

import { vehicalTaxControl } from "../controllers/vehicalTaxController.js";

const router=express.Router();

router.patch('/:vehicalId',vehicalTaxControl);

export {router as vehicalStateandRtoRouter};