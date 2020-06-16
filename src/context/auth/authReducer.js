import { LOGIN_SUCCESS, LOGOUT, USER_LOGGED, AUTH_ERROR } from '../types'

export default (state, action) => {
  switch (action.type) {
    case USER_LOGGED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      }
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: true,
      }
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      }

    default:
      return state
  }
}
