import React, { useState } from 'react';
import { addjob } from '../service/jobservice';
import {useNavigate} from "react-router-dom";
 
const Adduser = () => {
  const [job,setJob] = useState({title:"", company: "", location:"", salary:"", description:""});
  const navigate = useNavigate();
  const handleChange = (e)=> setJob({...job,[e.target.name]:e.target.value});
  const handleSubmit = async (e)=>{
    e.preventDefault();
    await addjob(job);
    navigate("/");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input name='title' onChange={handleChange} placeholder='Enter title' required /><br></br>
      <input name='company' onChange={handleChange} placeholder='Enter company' required /><br></br>
      <input name='location' onChange={handleChange} placeholder='Enter location' required /><br></br>
      <input name='salary' onChange={handleChange} placeholder='Enter salary' required /><br></br>
      <input name='description' onChange={handleChange} placeholder='Enter description' required /><br></br>
      <button type='submit'>Add User</button>
      </form>
    </div>
  )
}

export default Adduser
