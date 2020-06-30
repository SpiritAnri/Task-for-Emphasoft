import React, { useReducer } from 'react'
import axios from 'axios'
import setAuthToken from '../../utils/setAuthToken'
import AuthReducer from './authReducer'
import AuthContext from './authContext'
import { LOGIN_SUCCESS, LOGOUT, USER_LOGGED, AUTH_ERROR } from '../types'

import M from 'materialize-css/dist/js/materialize.min.js'

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  const loadUser = () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token)

      dispatch({
        type: USER_LOGGED,
      })
    } else {
      dispatch({ type: AUTH_ERROR })
    }
  }

  const login = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      const res = await axios.post(
        'https://emphasoft-test-assignment.herokuapp.com/api-token-auth/',
        formData,
        config
      )

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })
      M.toast({ html: 'Login Success' })
      loadUser()
    } catch (err) {
      M.toast({ html: 'Login Fail' })
      console.log(err)
    }
  }

  const logout = () => dispatch({ type: LOGOUT })

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        login,
        logout,
        loadUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
