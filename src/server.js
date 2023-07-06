import express from 'express'
import mongoose from "mongoose"
const app=express();
import { userRouter } from './routes/user.js';
app.use(express.json());
mongoose.connect("mongodb+srv://mayank4647:mayank4647@cluster0.le4v6jf.mongodb.net/towner?retryWrites=true&w=majority").then(
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