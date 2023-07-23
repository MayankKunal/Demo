

import { VehicalProfileModel } from "../models/VehicalProfile.js";

export const vehicalProfileUpdate=async(req,res)=>
{
  
      const {vehicalId}=req.params;
        const {vehicalRegNo,vehicalType,vehicalSeating,vehicalColour,vehicalMakeandModel,vehicalYearandManufacturing,serviceP,fuel,vehicalCategory} = req.body;
        const vehical = await VehicalProfileModel.findOne({_id:vehicalId});
        if (!vehical) {
          return res.status(404).json('vehical Not Found');
        }
      
       vehical.vehicalRegNo=vehicalRegNo,vehical.vehicalType=vehicalType,vehical.vehicalSeating=vehicalSeating,vehical.vehicalColour=vehicalColour,
       vehical.vehicalMakeandModel=vehicalMakeandModel,vehical.vehicalYearandManufacturing=vehicalYearandManufacturing,vehical.serviceP=serviceP,
       vehical.fuel=fuel,vehical.vehicalCategory=vehicalCategory
        await vehical.save();
        return res.status(200).json(vehical);
}
export const getvehicalProfile=async(req,res)=>
{
  const {vehicalId}=req.params;
  try{

      let vehicalProfile=await VehicalProfileModel.find({_id:vehicalId}).sort({"createdAt": -1});
      return res.send(vehicalProfile);
  }
  catch(error){
      res.send(error);
  }
}