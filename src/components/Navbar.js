import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className='Nbcontainer'>
        <NavLink to='/'>
          <h2>New Feeds</h2>
        </NavLink>
        <NavLink to={'/Upload'}>
          <h2>Upload</h2>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
