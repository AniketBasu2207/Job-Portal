const mongoose = require('mongoose');

// create schema
const userSchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true},
        password:{type:String,required:true},
        
    }
);

const User = mongoose.model('user-auth',userSchema);

module.exports = User;