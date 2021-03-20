const mongoose = require('mongoose')

let taskSchema = mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    title:{type:String},
    completed:{type:Boolean,default:false}
    
})
module.exports = mongoose.model('Task',taskSchema)

