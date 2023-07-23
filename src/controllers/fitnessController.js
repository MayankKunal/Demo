import { VehicalProfileModel } from "../models/VehicalProfile.js";
export const updateVehicalFitness=async(req,res)=>
{
  
      const {vehicalId}=req.params;
       
        const {vehicalAge,vehicalNoasFitnessCertificate,vehicalFitnessExpiryDate} = req.body;
        const user = await VehicalProfileModel.findOne({_id:vehicalId});
        if (!user) {
          return res.status(404).json('User Not Found');
        }
      
      user.vehicalAge=vehicalAge
      user.vehicalNoasFitnessCertificate=vehicalNoasFitnessCertificate,
      user.vehicalFitnessExpiryDate=vehicalFitnessExpiryDate,
    //   user.vehicalEmissionExpiryDate=vehicalEmissionExpiryDate
        await user.save();
        return res.status(200).json(user);
}
