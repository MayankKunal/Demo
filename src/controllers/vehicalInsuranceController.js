import { VehicalProfileModel } from "../models/VehicalProfile.js"
export const vehicalInsuranceUpdate=async(req,res)=>
{
  
      const {vehicalId}=req.params;
        const {insuranceProvider, vehicalNoasInsuranceDoucment,
        policyNo,insuranceExpiryDate} = req.body;
        const vehical = await VehicalProfileModel.findById({_id:vehicalId});
        if (!vehical) {
          return res.status(404).json('vehical Not Found');
        }
        
      vehical.insuranceProvider=insuranceProvider,
      vehical.vehicalNoasInsuranceDoucment=vehicalNoasInsuranceDoucment
      vehical.policyNo=policyNo
      vehical.insuranceExpiryDate=insuranceExpiryDate
        await vehical.save();
        return res.status(200).json(vehical);
}
