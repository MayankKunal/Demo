

import { createFAQs, findFAQsById,getAllFAQs} from "../services/faqsService.js";

export const setFAQs=async(req,res)=>
{

       
        const {question,answer} = req.body;
        
        const faqs=await createFAQs({question,answer})

        await faqs.save();
        res.status(200).json({message:"FAQs Created Successfully"});
}
export const faqsById=async(req,res)=>
{
  const {faqId}=req.params;
  try{

      let FAQs=await findFAQsById({faqId})
      return res.send(FAQs);
  }
  catch(error){
      res.send(error);
  }
}

export const allFAQs=async(req,res)=>
{
  
  try{

      let fAQs=await getAllFAQs();
      return res.send(fAQs);
  }
  catch(error){
      res.send(error);
  }
}
