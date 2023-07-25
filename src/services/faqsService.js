
import { FAQsModel } from "../models/Faqs.js";

export const findFAQsById = async ({faqId}) => {
  return FAQsModel.findOne({_id:faqId});
};

export const createFAQs= async (planData) => {
  return FAQsModel.create(planData);
};

export const getAllFAQs = async () => {
  return FAQsModel.find({});
};

