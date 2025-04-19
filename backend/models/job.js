const mongoose = require('mongoose');

// create schema
const jobSchema = new mongoose.Schema(
    {
        title:{type:String,required:true},
        company:{type:String,required:true},
        location:{type:String,required:true},
        salary:{type:Number,required:true},
        description:{type:String,required:true},
    }
);

const Job = mongoose.model('job',jobSchema);

module.exports = Job;