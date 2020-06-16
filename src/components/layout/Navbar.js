import React, { Fragment, useContext } from 'react'
import AuthContext from '../../context/auth/authContext'

const Navbar = () => {
  const authContext = useContext(AuthContext)

  const { logout, isAthenticated } = authContext

  const onLogout = () => {
    logout()
  }

  console.log(isAthenticated)

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
          {isAthenticated ? authLinks : <p>No login</p>}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
