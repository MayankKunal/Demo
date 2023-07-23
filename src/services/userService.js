// services/userService.js

import { UserModel } from "../models/Users.js";
import { BusinessModel } from "../models/BussinessProfile.js";
import { DriverModel } from "../models/DriverProfile.js";
import { VehicalProfileModel } from "../models/VehicalProfile.js";
import { AccountDetailModel } from "../models/BankDeatils.js";

const findUserByBusinessName = async (businessName) => {
  return UserModel.findOne({ businessName });
};

const registerUser = async (userData) => {
  return UserModel.create(userData);
};

const registerBusinessProfile = async (userId, businessData) => {
  return BusinessModel.create({ userId, ...businessData });
};

const registerDriverProfile = async (userId, driverData) => {
  return DriverModel.create({ userId, ...driverData });
};

const registerVehicleProfile = async (userId) => {
  return VehicalProfileModel.create({ userId });
};

const registerAccountDetail = async (userId) => {
  return AccountDetailModel.create({ userId });
};

const getAllUsers = async () => {
  return UserModel.find({});
};

const findUserByOwnerMobileNo = async (ownerMobileNo) => {
  return UserModel.findOne({ ownerMobileNo });
};

export {
  findUserByBusinessName,
  registerUser,
  registerBusinessProfile,
  registerDriverProfile,
  registerVehicleProfile,
  registerAccountDetail,
  getAllUsers,
  findUserByOwnerMobileNo,
}
