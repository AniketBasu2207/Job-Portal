import axios from "axios";

const API_URL = "http://localhost:5500/api/job";

// Add job
export const addjob = async (job)=> await axios.post(API_URL,job);
// Get all job
export const getjobs = async ()=> await axios.get(API_URL);
// job update
export const updatejobs = async (id,job)=> await axios.put(`${API_URL}/${id}`,job);
// delete job
export const deletejob = async (id)=> await axios.delete(`{API_URL}/${id}`);