
import { BusinessModel } from "../models/BussinessProfile.js";
// UpdateRc
export const updateRcOwner = async (userId,ownerMobileNo,gstNumber,panNumber,businessOwnerAdhar,ownerCumDriver,leasedVehical,channelPartner,agreedSaasContactAgreement,fleetOwner) => {
  try {
    const user = await BusinessModel.findOne({ userId });
        if (!user) {
          return res.status(404).json('User Not Found');
        }
      
        user.ownerMobileNo = ownerMobileNo;
        
        user.gstNumber = gstNumber;
       
        user.fleetOwner=fleetOwner
        
        user.panNumber = panNumber;
        
        user.businessOwnerAdhar = businessOwnerAdhar;
        user.agreedSaasContactAgreement=agreedSaasContactAgreement;
        user.ownerCumDriver = ownerCumDriver;
        user.leasedVehical =leasedVehical;
        user.ownerCumDriver = ownerCumDriver;
        user.channelPartner =channelPartner;
        user.ownerCumDriver = ownerCumDriver;
        await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

// Get business profile service

