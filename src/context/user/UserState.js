import React, { useReducer } from 'react'
import axios from 'axios'
import UserReducer from './userReducer'
import UserContext from './userContext'

const UserState = props => {
  const initialState = {
    users: null,
    filtered: null,
  }

  const [state, dispatch] = useReducer(UserReducer, initialState)

  const getUsers = async () => {
    try {
      const res = await axios.get('/api/v1/users/')

      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        getUsers,
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState
