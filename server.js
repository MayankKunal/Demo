import express from 'express'

const app=express();
app.use(express.json());

app.get('/',(req,res)=>
{
    res.send('<h1>Hello World</h1>')
});
const PORT=process.env.port||4000;
app.listen(PORT,()=>
{
    console.log(`app is running on ${PORT}`);
})