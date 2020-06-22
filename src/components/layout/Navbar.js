import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'

import M from 'materialize-css/dist/js/materialize.min.js'

import AuthContext from '../../context/auth/authContext'
import { useEffect } from 'react'

const Navbar = () => {
  const authContext = useContext(AuthContext)

  const { logout, isAuthenticated } = authContext

  useEffect(() => {
    let sidenav = document.querySelector('#nav-mobile')
    M.Sidenav.init(sidenav, {})
  }, [])

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
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  )

  return (
    <Fragment>
      <nav className='nav-extended'>
        <div className='nav-wrapper blue-grey darken-3'>
          <a href='/' className='brand-logo'>
            For{'\u00A0'}Emphasoft
          </a>
          <a
            href='#!'
            data-target='nav-mobile'
            className='sidenav-trigger'
            style={{ margin: '0 0' }}
          >
            <i className='material-icons'>menu</i>
          </a>
          <ul className='right hide-on-med-and-down'>
            {isAuthenticated ? authLinks : guestLinks}
          </ul>
        </div>
      </nav>

      <ul id='nav-mobile' className='sidenav'>
        {isAuthenticated ? authLinks : guestLinks}
      </ul>
    </Fragment>
  )
}
export default Navbar
