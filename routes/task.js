const express=require('express');
const router=express.Router();
const {get_tasks,create_task, get_task, update_task ,delete_task}
    =require('../controllers/task');


router.route('/')
.get(get_tasks)
.post(create_task);

router.route('/:id')
.get(get_task)
.patch(update_task)
.delete(delete_task);

module.exports=router;