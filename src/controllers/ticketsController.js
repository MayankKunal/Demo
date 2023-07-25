
import { createTicket, findTicketById, findTicketByUserId,getAllTicket} from "../services/ticketService.js";

export const setTicket=async(req,res)=>
{
    const {userId}=req.params;
       
        const {initiatedDate,status,remarks,category} = req.body;
        
        const Ticket=await createTicket(userId,{initiatedDate,status,remarks,category});
        await Ticket.save();
        res.status(200).json({message:"Ticket Created Successfully"});
}
export const getticketById=async(req,res)=>
{
  const {TicketId}=req.params;
 
  try{

      let Tickets=await findTicketById({TicketId});
      return res.send(Tickets);
  }
  catch(error){
      res.send(error);
  }
}
export const getTicketByUser=async(req,res)=>
{
  const {userId}=req.params;
 
  try{

      let Ticket=await findTicketByUserId({userId});
      if(Ticket)
      return res.status(203).send(Ticket);
      else
       return res.status(404).send("Tickets Not Found");
  }
  catch(error){
      res.send(error);
  }
}
export const getAllTickets=async(req,res)=>
{
  
  try{

      let Tickets=await getAllTicket();
      return res.send(Tickets);
  }
  catch(error){
      res.send(error);
  }
}
