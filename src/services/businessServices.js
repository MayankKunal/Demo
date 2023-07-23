
import { BusinessModel } from "../models/BussinessProfile.js";
// Update business profile service
export const updateBusinessProfileService = async (userId, businessName, ownerName) => {
  try {
    const user = await BusinessModel.findOne({ userId });
    if (!user) {
      return null;
    }

    if (businessName) user.businessName = businessName;
    if (ownerName) user.ownerName = ownerName;

    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

// Get business profile service
export const getBusinessProfileService = async (userId) => {
  try {
    const business = await BusinessModel.find({ userId }).sort({ createdAt: -1 });
    return business;
  } catch (error) {
    throw error;
  }
};

//getAll Business Profile
export const getAllBusinessProfile=async()=>
{
    try{
        const business=await BusinessModel.find({}).sort({createdAt:-1});
        return business;
    }catch (error) {
        throw error;
      }
}
