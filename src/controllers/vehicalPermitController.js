
import { VehicalProfileModel } from "../models/VehicalProfile.js";



export const vehicalPermitUpdate=async(req,res)=>
{
  
      const {vehicalId}=req.params;
        const {vehicalPermitType,vehicalNoasPermitDocument, permitExpiryDate} = req.body;
        const user = await VehicalProfileModel.findOne({_id:vehicalId});
        if (!user) {
          return res.status(404).json('User Not Found');
        }
      
      user.vehicalPermitType=vehicalPermitType
      user.vehicalNoasPermitDocument=vehicalNoasPermitDocument,
      user.permitExpiryDate=permitExpiryDate
        await user.save();
        return res.status(200).json(user);
}
