import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import Main from './components/pages/Main'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import PrivateRoute from './components/routing/PrivateRoute'

import UserState from './context/user/UserState'
import AuthState from './context/auth/AuthState'
import Navbar from './components/layout/Navbar'

const App = () => {
  return (
    <AuthState>
      <UserState>
        <Router>
          <Navbar />
          <div className='container'>
            <Switch>
              <PrivateRoute exact path='/' component={Main} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
            </Switch>
          </div>
        </Router>
      </UserState>
    </AuthState>
  )
}

export default App
