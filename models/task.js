const mongoose=require('mongoose');

const task_schema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, `name is must`],
        trim:true,
        maxlength:[20, `name cannot be more than 20 chars`]
    },
    status:Boolean
})

module.exports=mongoose.model('task',task_schema);