const express=require('express');
const app=express();
const task=require('./routes/task');
const connectDB=require('./db/connect');
require('dotenv').config();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send(`Hey there! This is the Task Manager app 
    you are looking for`);
})

app.use('/api/v1/task',task);

const port=5000;

const start=async()=>{
    try{
        await connectDB(process.env.URL)
        app.listen(port,()=>{
            console.log(`Server is listening to port ${port}...`);
        })
    }
    catch(err){
        console.log(err);
    }
}

start();

