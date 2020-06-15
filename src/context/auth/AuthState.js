import React, { useReducer } from 'react'
import axios from 'axios'
import AuthReducer from './authReducer'
import AuthContext from './authContext'

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAthenticated: null,
    loading: true,
    user: null,
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  const login = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      const res = await axios.post('/api-token-auth/', formData, config)

      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAthenticated: state.isAthenticated,
        loading: state.loading,
        user: state.user,
        login,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
