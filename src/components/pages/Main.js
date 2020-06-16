import React, { useEffect, useContext } from 'react'
import AuthContext from '../../context/auth/authContext'

const Main = () => {
  const authContext = useContext(AuthContext)

  useEffect(() => {
    authContext.loadUser()
    //eslint-disable-next-line
  }, [])

  return (
    <div>
      <h1>Main components</h1>
    </div>
  )
}

export default Main
