import React, { useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import { getjobs, deletejob } from '../service/jobservice'

const Home = () => {
  const [job, setJobs] =useState([]);
  useEffect(()=>{ fetchusers();
  },[]);

  const fetchusers = async() => {
    const{data} = await getjobs();
    setJobs(data);
   }
   const handledelete = async(id) => {
    await deletejob(id);
    fetchusers();
   }
      return <>
          <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/add'>Form</NavLink></li>
    </ul>
    <ul>
    {job.map(x=>(
      <li>
        {x.title} - {x.company} - {x.location} - {x.salary} - {x.description}
        <NavLink to={'/edit/${x._id}'} >Edit</NavLink>
      <button onClick={()=>handledelete(x._id)}>Delete</button>
      </li>
    ))}
    </ul>
  </>
}

export default Home
