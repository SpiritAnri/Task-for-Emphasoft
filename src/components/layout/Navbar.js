import React, { Fragment, useContext } from 'react'
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
  return (
    <nav>
      <div className='nav-wrapper'>
        <a href='/' className='brand-logo'>
          Logo
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          {isAuthenticated ? authLinks : <p>No login</p>}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
