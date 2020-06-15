import React from 'react'
import './App.css'

import Login from './components/auth/Login'

import UserState from './context/user/UserState'
import AuthState from './context/auth/AuthState'

const App = () => {
  return (
    <AuthState>
      <UserState>
        <div>
          <Login />
        </div>
      </UserState>
    </AuthState>
  )
}

export default App
