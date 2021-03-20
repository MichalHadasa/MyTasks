const User = require('../models/User')
const Task = require('../models/Task')


const saveTask = async (req,res)=>{
    let newTask = new Task(req.body)
    try{
        console.log("save task "+req.body)
    
       let task =  await newTask.save();
        let user = await User.findById(req.body.userId)
        user.task.push(task._id)
        await user.save()
        res.status(200).json({task:task})
    }
    catch(err){
        res.send(err)
    }
}
const getTaskByUserId=async(req,res)=>{
        try
        {
        let user = await User.findById(req.params.id).populate("task")
        
        res.status(200).json(user.task)
        }
        catch(err){
        res.status(500).json(err)
        }
        
        
}
const deleteTask=async(req,res)=>{
        try{
            console.log("delete")
            console.log("req.params.id: "+req.params.id)
            debugger;
            let task=await Task.findById(req.params.id)
            console.log("Task: "+task)
             await User.findByIdAndUpdate(task.userId, { $pull: { task: task._id } })
            await task.remove();
            // await task.save();
            res.status(200).json({delete:"deleted!"});
        }
        catch(error){
            res.status(500).json({"error":error.message})
        }   
    }
    const updateTask=async(req,res)=>{
    try{
       let task= await Task.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json({task:task});
    }
    catch(error){
        res.status(500).json({"error":error.message})
    }   
}  
    
module.exports = {saveTask,getTaskByUserId,deleteTask,updateTask}