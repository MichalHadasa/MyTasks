const mongoose = require('mongoose')
const validator =require( 'validator');
let userSchema = mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String,require,
        validate:{
        validator: validator.isEmail,
        message: '{VALUE} is not a valid email',
        isAsync: false
      }},
    password:{type:String,require},
    task:[
        { type:mongoose.Schema.Types.ObjectId,ref:'Task' }
    ]
})
module.exports = mongoose.model('User',userSchema)