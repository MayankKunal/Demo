// routes/userRoutes.js
import express from "express";

import { setTicket,getAllTickets,getticketById,getticketByUser} from "../controllers/ticketsController.js";

const router = express.Router();

router.post('/:userId', setTicket);
router.get('/', getAllTickets);

router.get('/:ticketId', getticketById);

router.get("/user/:userId",getticketByUser);

export { router as ticketRouter};
