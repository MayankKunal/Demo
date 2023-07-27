import { TicketModel } from "../models/Tickets.js";

export const findTicketById = async ({ticketId}) => {
  return TicketModel.findOne({_id:ticketId});
};

export const createTicket= async (userId,ticketData) => {
  return TicketModel.create({userId,...ticketData});
};

export const getAllTicket = async () => {
  return TicketModel.find({});
};

export const getTicketByUserId=async({userId})=>
{
  return TicketModel.findOne({userId})
}