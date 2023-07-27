
import { createTicket, findTicketById,getAllTicket, getTicketByUserId} from "../services/ticketService.js";

export const setTicket=async(req,res)=>
{
    const {userId}=req.params;
       try{
        const {initiatedDate,status,remarks,category} = req.body;
        const Ticket=await createTicket(userId,{initiatedDate,status,remarks,category});
        await Ticket.save();
        res.status(200).json({message:"Ticket Created Successfully"});
       }catch{
            
       }
}
export const getticketById=async(req,res)=>
{
  
 
  try{
    const {ticketId}=req.params;

      let Ticket=await findTicketById({ticketId});
      if(Ticket)
      return res.status(200).send(Ticket);
      else
       return res.status(404).send("Ticket Not Found");
  }
  catch(error){
      res.status(500).send(error);
  }
}

export const getticketByUser=async(req,res)=>
{
  
 
  try{
    const {userId}=req.params;

      let Ticket=await getTicketByUserId({userId});
      if(Ticket)
      return res.status(200).send(Ticket);
      else
       return res.status(404).send("Ticket Not Found");
  }
  catch(error){
      res.status(500).send(error);
  }
}





export const getAllTickets=async(req,res)=>
{
  
  try{

      let Tickets=await getAllTicket();
      if(Tickets)
      return res.send(Tickets);
      else return res.status(404).send("Tickets not Found");
  }
  catch(error){
    res.status(500).send(error);
  }
}
