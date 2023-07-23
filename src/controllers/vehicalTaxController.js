import { VehicalProfileModel } from "../models/VehicalProfile.js";
export const vehicalTaxControl=async(req,res)=>
{
  
      const {vehicalId}=req.params;
        const {stateandRto, vehicalNoasRoadTaxDocument,
            roadTaxNo,vehicalRoadTaxExpiryDate} = req.body;
        const user = await VehicalProfileModel.findOne({_id:vehicalId});
        if (!user) {
          return res.status(404).json('User Not Found');
        }
      
      user.stateandRto=stateandRto
      user.vehicalNoasRoadTaxDocument=vehicalNoasRoadTaxDocument,
      user.roadTaxNo=roadTaxNo,
      user.vehicalRoadTaxExpiryDate=vehicalRoadTaxExpiryDate
        await user.save();
        return res.status(200).json(user);
}
