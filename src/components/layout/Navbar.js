import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'

const Navbar = () => {
  const authContext = useContext(AuthContext)

  const { logout, isAuthenticated } = authContext

  const onLogout = () => {
    logout()
  }

  const authLinks = (
    <Fragment>
      <li>
        <a onClick={onLogout} href='#!'>
          Logout
        </a>
      </li>
    </Fragment>
  )

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  )

  return (
    <nav>
      <div className='nav-wrapper blue-grey darken-3'>
        <a href='/' className='brand-logo'>
          Task for Emphasoft
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
