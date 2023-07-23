import { DriverModel } from "../models/DriverProfile.js";
import bcrypt from 'bcrypt';

// Driver login
export const driverLogin = async (req, res) => {
  const { driverMobileNo, driverPassword } = req.body;
  const driver = await DriverModel.findOne({ driverMobileNo });

  if (!driver) {
    return res.json({ message: "Driver Does not exist" });
  }

  const isValid = await bcrypt.compare(driverPassword, driver.driverPassword);
  if (!isValid) {
    return res.json({ message: "username or password is incorrect!" });
  }

  
  res.json({ driverId: driver._id});
};

// Update driver profile
export const updateDriverProfile = async (req, res) => {
  try {
    const { driverId } = req.params;
    const { driverName, driverMobileNo, driverPhoto, driverAssociatedVehicalNumber, driverAadharNo } = req.body;

    const user = await DriverModel.findById({ _id: driverId });
    if (!user) {
      return res.status(404).json('User Not Found');
    }

    user.driverName = driverName;
    user.driverPhoto = driverPhoto;
    user.driverMobileNo = driverMobileNo;
    user.driverAssociatedVehicalNumber = driverAssociatedVehicalNumber;
    user.driverAadharNo = driverAadharNo;
    
    await user.save();
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Get driver profile by driver ID
export const getDriverProfile = async (req, res) => {
  const { driverId } = req.params;
  try {
    let driverProfile = await DriverModel.find({ _id: driverId }).sort({ "createdAt": -1 });
    return res.send(driverProfile);
  }
  catch (error) {
    res.send(error);
  }
};
 export const allDriverProfile=async(req,res)=>
 {
    try{
        let drivers=await DriverModel.find({}).sort({"createdAt":-1});
        return res.send(drivers);
    }
    catch(err)
    {
        res.send(err);
    }
 }