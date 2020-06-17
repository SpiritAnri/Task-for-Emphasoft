import React, { useEffect, useContext } from 'react'
import AuthContext from '../../context/auth/authContext'

import Users from '../users/Users'

const Main = () => {
  const authContext = useContext(AuthContext)

  useEffect(() => {
    authContext.loadUser()
    //eslint-disable-next-line
  }, [])

  return (
    <div>
      <h1>Main components</h1>
      <Users />
    </div>
  )
}

export default Main
