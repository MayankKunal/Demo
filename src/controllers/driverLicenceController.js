import { DriverModel } from "../models/DriverProfile.js";

export const drivingLicencUpdate=async(req,res)=>
{  try{
      const {driverId}=req.params;
        const {drivingLicenceNo,drivingLicenceValidity,badgeNo,fatherName,badgeValidity, dateOfBirth,stateandRto, drivingLicenceImage} = req.body;
             
        const user = await DriverModel.findById({_id:driverId});
        if (!user) {
          return res.status(404).json('User Not Found');
        }
       user.drivingLicenceNo = drivingLicenceNo;
        
        user.drivingLicenceValidity = drivingLicenceValidity;
       
        user.badgeNo=badgeNo;
        
        user.fatherName= fatherName;
        
        user.badgeValidity=badgeValidity;
        user.dateOfBirth=dateOfBirth;
        user.stateandRto=stateandRto;
        user.drivingLicenceImage=drivingLicenceImage;
        await user.save();
      
        return res.status(200).json(user);
      }
      catch(err)
      {
        return res.status(505).json(err);
      }
      }

export const  getDriverDrivingLicne=async(req,res)=>
{
  const {userId}=req.params;
  try{

      let drivingLicence=await DrivingLicenceModel.find({userId}).sort({"createdAt": -1});
      return res.send(drivingLicence);
  }
  catch(error){
      res.send(error);
  }
}
