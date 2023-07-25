
import { PlanModel } from "../models/Plans.js";

export const findPlanById = async ({planId}) => {
  return PlanModel.findOne({_id:planId});
};

export const createPlan= async (planData) => {
  return PlanModel.create(planData);
};

export const getAllPlan = async () => {
  return PlanModel.find({});
};

