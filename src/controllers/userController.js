// controllers/userController.js
import * as userService from '../services/userService.js';
import bcrypt from 'bcrypt';

const userRegister = async (req, res) => {
  const { businessName, ownerName, ownerMobileNo, vehicalNo, ownerCumDriver, driverMobileNo, ownerPassword, driverPassword, referralCode, ownerCode, channnelPartnerCode } = req.body;
                                
  try {
    const user = await userService.findUserByBusinessName(businessName);
    if (user) {
      return res.json({ message: "Business Name already exists" });
    }

    const hashedOwnerPassword = await bcrypt.hash(ownerPassword, 10);
    const hashedDriverPassword = await bcrypt.hash(driverPassword, 10);

    const newUser = await userService.registerUser({
      businessName,
      ownerName,
      ownerMobileNo,
      vehicalNo,
      ownerCumDriver,
      ownerPassword: hashedOwnerPassword,
      referralCode,
      ownerCode,
      channnelPartnerCode,
    });

    // Register Business Profile
    await userService.registerBusinessProfile(newUser._id, {
      businessName,
      ownerName,
      ownerMobileNo,
      ownerCumDriver,
    });

    // Register Driver Profile
    await userService.registerDriverProfile(newUser._id, {
      driverMobileNo,
      driverPassword: hashedDriverPassword,
    });

    // Register Vehicle Profile
   

    res.json({ message: "User Registered Successfully" });
  } 
  catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getUserInfo = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const ownerLogin = async (req, res) => {
  const { ownerMobileNo, password } = req.body;

  try {
    const user = await userService.findUserByOwnerMobileNo(ownerMobileNo);

    if (!user) {
      return res.json({ message: "User does not exist" });
    }

    const isValid = await bcrypt.compare(password, user.ownerPassword);
    if (!isValid) {
      return res.json({ message: "Username or password is incorrect" });
    }

    res.json({ user: user._id });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export {userRegister,getUserInfo,ownerLogin };
