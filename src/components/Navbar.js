import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../css/navbar.css'

const Navbar = ({ user, userrole }) => {
  const menuref = useRef('')
  const togglemenu = () => {
    menuref.current.classList.toggle('showmenu')
    menuref.current.classList.toggle('hidemenu')
  }

  return (
    <div className='navbar'>
      <div className='left'>
        <h1>Beach </h1>
        <h1 className='resort'>Resort </h1>
        <Link to='/' className='navlink'>
          <p>Home</p>
        </Link>
        <Link to='/rooms' className='navlink'>
          <p>Rooms</p>
        </Link>
        <button className='menubtn' onClick={() => togglemenu()}>
          Menu
        </button>
      </div>

      <div className='right hidemenu' ref={menuref}>
        <div className='hello'>
          <p>Hello</p>
        </div>
        <div className='secondrow'>
          <p className='username'>
            {localStorage.user ? localStorage.user : 'Guest'}
          </p>

          <Link to={'/Upload'} className='navlink'>
            <p>{userrole === 'Admin' ? 'Upload' : ''}</p>
          </Link>

          <Link to='/admindashboard' className='navlink'>
            <p>{localStorage.userrole === 'Admin' ? 'AdminDashboard' : ''}</p>
          </Link>
          <Link to='/mybookings' className='navlink'>
            <p>
              {localStorage.userrole !== 'Admin' && localStorage.user
                ? 'MyBookings'
                : ''}
            </p>
          </Link>
          <Link to={user ? '/' : '/Login'} className='navlink'>
            <p
              onClick={() => {
                if (user) {
                  localStorage.clear()
                  window.location.reload()
                } else return
              }}
            >
              {user ? 'Log out' : 'Login'}
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
const mapStatetoProps = (state) => {
  return {
    user: state.user,
    userrole: state.userrole,
  }
}
export default connect(mapStatetoProps)(Navbar)
