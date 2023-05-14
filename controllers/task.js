const Task=require('../models/task');

const get_tasks= async (req,res)=>{
    try{
        const tasks= await Task.find({});
        res.status(200).json({tasks})
    }
    catch(err){
        res.status(500).json({msg: err});
    }
    
}

const create_task= async (req,res)=>{
    try{
        const task=await Task.create(req.body);
        if(!task){
            return res.status(404).json({msg:`No task with id ${id}`});
        }
        res.status(200).json({task});
    }
    catch(err){
        res.status(500).json({msg: err});
    }
    
}

const get_task= async (req,res)=>{
    try{
        const id=req.params.id
        const task= await Task.find({_id: id});
        if(!task){
            return res.status(404).json({msg:`No task with id ${id}`});
        }
        res.status(200).json({task});
    }
    catch(err){
        res.status(500).json({msg: err});
    }
}

const update_task=async (req,res)=>{
    try{
        const id=req.params.id;
        const task= await Task.findByIdAndUpdate({_id:id});
        if(!task){
            return res.status(404).json({msg:`No task with id ${id}`});
        }
        res.status(200).json({task});
    }
    catch(err){
        res.status(500).json({msg:err});
    }
}

const delete_task=async (req,res)=>{
    try{
        const id=req.params.id;
        const task=await Task.findByIdAndDelete({_id:id});
        if(!task){
            return res.status(404).json({msg:`No task with id ${id}`});
        }
        res.status(200).json({task});
    }
    catch(err){
        res.status(500).json({msg:err});
    }
}

module.exports={
    get_tasks, create_task, get_task, update_task, delete_task
}