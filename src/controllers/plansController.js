import { findPlanById,createPlan,getAllPlan}from "../services/planService.js";

export const setPlan=async(req,res)=>
{

       
        const {planName,planDetails,planAmount,planDesc,planDuration} = req.body;
        
        const plan=await createPlan({
          planName,planDetails,planAmount,planDesc,planDuration
        });
        await plan.save();
        res.status(200).json({message:"Plan Created Successfully"});
}
export const planById=async(req,res)=>
{
  const {planId}=req.params;
  try{

      let plan=await findPlanById({planId})
      return res.send(plan);
  }
  catch(error){
      res.send(error);
  }
}

export const allPlans=async(req,res)=>
{
  
  try{

      let plan=await getAllPlan()
      return res.send(plan);
  }
  catch(error){
      res.send(error);
  }
}
