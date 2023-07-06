import express from 'express'
import mongoose from "mongoose"
import 'dotenv/config'
const app=express();
import { userRouter } from './routes/user.js';
app.use(express.json());
mongoose.connect(process.env.MONGO_URI).then(
    console.log("Databse connected")).
    catch((err) =>{
        console.log(err)
    })

app.get('/',(req,res)=>
{
    res.send('<h1>Hello World</h1>')
});
app.use('/auth',userRouter);
const PORT=process.env.port||4000;
app.listen(PORT,()=>
{
    console.log(`app is running on ${PORT}`);
})