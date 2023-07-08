import express from 'express'
import mongoose from "mongoose"
import cors from 'cors'
import 'dotenv/config'
const app=express();
import { userRouter } from './routes/user.js';
import { notificationRouter } from './routes/notification.js';
app.use(express.json());
app.use(cors());
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
app.use('/notification',notificationRouter)
const PORT=process.env.port||4000;
app.listen(PORT,()=>
{
    console.log(`app is running on ${PORT}`);
})