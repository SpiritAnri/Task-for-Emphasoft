import React, { useEffect, useContext } from 'react'
import AuthContext from '../../context/auth/authContext'

import Users from '../users/Users'
import UserFilter from '../users/UserFilter'

const Main = () => {
  const authContext = useContext(AuthContext)

  useEffect(() => {
    authContext.loadUser()
    //eslint-disable-next-line
  }, [])

  return (
    <div>
      <UserFilter />
      <Users />
    </div>
  )
}

export default Main
