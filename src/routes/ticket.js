// routes/userRoutes.js
import express from "express";

import { setTicket,getAllTickets,getTicketByUser,getticketById} from "../controllers/ticketsController.js";

const router = express.Router();

router.post('/:userId', setTicket);
router.get('/', getAllTickets);
router.get('/:ticketId', getticketById);
router.get('/:userId',getTicketByUser);

export { router as ticketRouter};
