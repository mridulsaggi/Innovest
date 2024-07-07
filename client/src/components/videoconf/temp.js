import React from 'react'
import { Link } from 'react-router-dom'

const Temp = () => {
  return (
    <div className='livealso'>
      <div className="left">
        <Link to="/live">LIVE</Link>
        </div>
      <div className="right"><Link >UPCOMING</Link></div>
    </div>
  )
}

export default Temp
