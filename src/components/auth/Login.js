import React, { useContext, useState, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext'

const Login = props => {
  const authContext = useContext(AuthContext)

  const { login, isAthenticated } = authContext

  useEffect(() => {
    if (isAthenticated) {
      props.history.push('/')
    }
  }, [isAthenticated, props.history])

  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  const { username, password } = user

  const onChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const onSubmit = event => {
    event.preventDefault()

    login({
      username,
      password,
    })
  }

  return (
    <div className='row'>
      <h1 className='col s6 offset-s5'>Login</h1>

      <form className='col s6 offset-s5' onSubmit={onSubmit}>
        <div className='row'>
          <div className='input-field col s6'>
            <input
              placeholder='Username'
              id='username'
              type='text'
              name='username'
              value={username}
              onChange={onChange}
              className='validate'
              required
            />
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s6'>
            <input
              placeholder='Password'
              id='password'
              type='password'
              name='password'
              value={password}
              onChange={onChange}
              className='validate'
              required
            />
          </div>
        </div>

        <input
          type='submit'
          value='Login'
          className='waves-effect waves-light btn'
        />
      </form>
    </div>
  )
}

export default Login
