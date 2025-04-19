const express = require('express');

const Job = require('../models/job');
// const Job = require('../models/job');
const router = express.Router();

// create Job
router.post('/', async(req, res) => {
    const job = new Job(req.body);
    await job.save();
    res.json(job);
});

// read all job
router.get('/', async(req, res) => {
    const jobs = await Job.find();
    res.json(jobs);
});

// read single job
router.get('/:id', async(req, res) => {
    const job = await Job.findById(req.params.id);
    res.json(job);
});

// update job
router.put('/:id', async(req, res) => {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body,{new:true});
    res.json(job);
});

//delete
router.delete('/:id',async(req,res)=>{
    await Job.findByIdAndDelete(req.params.id);
     res.json({message:"job deleted"});
});

module.exports = router;