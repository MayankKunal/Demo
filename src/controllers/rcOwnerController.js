
import { updateRcOwner } from "../services/rcOwnerservices.js";
// Update Rc Owner
export const updateRcOwnerOfUser = async (req, res) => {
  const { userId } = req.params;
  const {ownerMobileNo,gstNumber,panNumber,businessOwnerAdhar,ownerCumDriver,leasedVehical,channelPartner,agreedSaasContactAgreement,fleetOwner} = req.body;

  try {
    const updatedUser = await updateRcOwner(userId,ownerMobileNo,gstNumber,panNumber,businessOwnerAdhar,ownerCumDriver,leasedVehical,channelPartner,agreedSaasContactAgreement,fleetOwner);

    if (!updatedUser) {
      return res.status(404).json("User Not Found");
    }

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};


