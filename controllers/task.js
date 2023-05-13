const Task=require('../models/task');

const get_tasks=(req,res)=>{
    res.send(`get all tasks`)
}

const create_task= async (req,res)=>{
    const task=await Task.create(req.body);
    res.status(201).json({task});
}

const get_task=(req,res)=>{
    res.json({id:req.params.id})
}

const update_task=(req,res)=>{
    res.json(req.body);
}

const delete_task=(req,res)=>{
    res.send(`delete task`);
}

module.exports={
    get_tasks, create_task, get_task, update_task, delete_task
}