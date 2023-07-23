// import { BusinessModel } from "../models/BussinessProfile.js";
// import { updateBusinessProfileService, getBusinessProfileService } from "../services/businessService.js";
import { updateBusinessProfileService,getBusinessProfileService,getAllBusinessProfile} from "../services/businessServices.js";
// Update business profile
export const updateBusinessProfile = async (req, res) => {
  const { userId } = req.params;
  const { businessName, ownerName } = req.body;

  try {
    const updatedUser = await updateBusinessProfileService(userId, businessName, ownerName);

    if (!updatedUser) {
      return res.status(404).json("User Not Found");
    }

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// Get business profile by user ID
export const getBusinessProfile = async (req, res) => {
  const { userId } = req.params;
  try {
    const business = await getBusinessProfileService(userId);
    return res.send(business);
  } catch (error) {
    res.send(error);
  }
};
export const getAllBusiness=async(req,res)=>
{
    try{
        const business=await getAllBusinessProfile();
        return res.send(business);
    }
    catch (error) {
        res.send(error);
      }
}
