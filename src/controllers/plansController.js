import { findPlanById,createPlan,getAllPlan}from "../services/planService.js";

export const setPlan=async(req,res)=>
{

       try{
        const {planName,planDetails,planAmount,planDesc,planDuration} = req.body;
        
        const plan=await createPlan({
          planName,planDetails,planAmount,planDesc,planDuration
        });
        await plan.save();
        res.status(200).json({message:"Plan Created Successfully"});
      }
      catch(err){
        res.send(err);
      }
      
}
export const planById=async(req,res)=>
{
  const {planId}=req.params;
  try{

      let plan=await findPlanById({planId});
      if(plan)
      return res.status(200).send(plan);
      else
       return res.status(404).send({message:"Plan not Found"});
  }
  catch(error){
      res.status(500).send(error);
  }
}

export const allPlans=async(req,res)=>
{
  
  try{

      let plan=await getAllPlan();
      if(plan)
      return res.status(200).send(plan);
      else 
      return res.status(404).send({message:"Plans Not Found"});
  }
  catch(error){
      res.status(500).send(error);
  }
}
