import React, { useReducer } from 'react'
import axios from 'axios'
import setAuthToken from '../../utils/setAuthToken'
import AuthReducer from './authReducer'
import AuthContext from './authContext'
import { LOGIN_SUCCESS } from '../types'

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

      console.log(res.data)
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })

      if (localStorage.token) setAuthToken(localStorage.token)
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
