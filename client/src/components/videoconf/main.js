import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Main = () => {
    const [code,setcode]=useState("");
    const navigate=useNavigate();
    const submithandler=(e)=>{
        e.preventDefault();
        // const{code}
        navigate(`/room/${code}`) //navigating to the room page
    }
  return (
    <div >
      <h1>Create or join existing meeting room</h1>
      <form onSubmit={submithandler}>
        <div className='flex codediv'> 
        <label >ENTER ROOM CODE FOR THE MEETING</label>
        <input type="text" placeholder='room code' className='mt-2' value={code} onChange={(e)=>{
            setcode(e.target.value)
        }}/>
        <button type='submit' className='mt-2' >ENTER</button>
        </div>
      </form>
    </div>
  )
}

export default Main
