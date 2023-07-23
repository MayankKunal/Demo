

import { VehicalProfileModel } from "../models/VehicalProfile.js";


export const UpdateVehicalEmission=async(req,res)=>
{
  
      const {vehicalId}=req.params;
       
        const {emissionType, vehicalNoasEmissionDoc,emissionNoID,vehicalEmissionExpiryDate} = req.body;
        const user = await VehicalProfileModel.findOne({_id:vehicalId});
        if (!user) {
          return res.status(404).json('User Not Found');
        }
      
      user.emissionType=emissionType
      user.vehicalNoasEmissionDoc=vehicalNoasEmissionDoc,
      user.emissionNoID=emissionNoID,
      user.vehicalEmissionExpiryDate=vehicalEmissionExpiryDate
        await user.save();
        return res.status(200).json(user);
}
