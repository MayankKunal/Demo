import { TicketModel } from "../models/Tickets.js";

export const findTicketById = async ({TicketId}) => {
  return TicketModel.findOne({_id:TicketId});
};

export const createTicket= async (userId,ticketData) => {
  return TicketModel.create({userId,...ticketData});
};

export const getAllTicket = async () => {
  return TicketModel.find({});
};
 export const findTicketByUserId=async ({userId})=>
 {
    return TicketModel.findOne({userId});
 }
