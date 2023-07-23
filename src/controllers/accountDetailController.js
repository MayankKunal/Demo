import { AccountDetailModel } from "../models/BankDeatils.js";
export const setAccountDetail=async(req,res)=>
{
  
      const {driverId}=req.params;
       
        const {accountHolderName,bankAccountNo,ifscCode,branchName} = req.body;
        const user = await AccountDetailModel.findOne({driverId});
        if (!user) {
          return res.status(404).json('User Not Found');
        }
      
      user.accountHolderName=accountHolderName
      user.bankAccountNo=bankAccountNo,
      user.ifscCode=ifscCode,
      user.branchName=branchName
        await user.save();
        return res.status(200).json(user);
}
export const getAccountDetail=async(req,res)=>
{
  const {driverId}=req.params;
  try{

      let accountDetail=await AccountDetailModel.find({driverId}).sort({"createdAt": -1});
      return res.send(accountDetail);
  }
  catch(error){
      res.send(error);
  }
}
