import React, { useContext, useState } from 'react'
import AuthContext from '../../context/auth/authContext'

const Login = props => {
  const authContext = useContext(AuthContext)

  const { login } = authContext

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
    <div className='container'>
      <h1>Login</h1>

      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            value={username}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <input
          type='submit'
          value='Login'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  )
}

export default Login
