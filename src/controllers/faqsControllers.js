

import { createFAQs, findFAQsById,getAllFAQs} from "../services/faqsService.js";

export const setFAQs=async(req,res)=>
{

       try{
        const {question,answer} = req.body;
        
        const faqs=await createFAQs({question,answer})

        await faqs.save();
        res.status(200).json({message:"FAQs Created Successfully"});
       }
       catch(err)
       {
        res.send(err);
       }
}
export const faqsById=async(req,res)=>
{
  const {faqId}=req.params;
  try{

      let FAQs=await findFAQsById({faqId})
      if(FAQs)
      return res.status(200).send(FAQs);
      else
       res.status(404).send({message:"Faqs Not Found"});
  }
  catch(error){
      res.status(500).send(error);
  }
}

export const allFAQs=async(req,res)=>
{
  
  try{

      let fAQs=await getAllFAQs();
      if(fAQs)
      return res.status(200).send(fAQs);
      else
      {
        return res.status(400).send({message:"Faqs Not Found"});
      }
  }
  catch(error){
      res.status(500).send(error);
  }
}
