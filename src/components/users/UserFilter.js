import React, { useContext, useRef, useEffect } from 'react'
import UserContext from '../../context/user/userContext'

const UserFilter = () => {
  const userContext = useContext(UserContext)
  const text = useRef('')

  const { filterUsers, clearFilter, filtered } = userContext

  useEffect(() => {
    if (filtered === null) {
      text.current.value = ''
    }
  })

  const onChange = event => {
    if (text.current.value !== '') {
      filterUsers(text.current.value)
    } else {
      clearFilter()
    }
  }

  return (
    <form className='col s12'>
      <div className='row'>
        <div className='input-field col s6'>
          <i className='material-icons prefix'>search</i>
          <input ref={text} id='icon_prefix' type='text' onChange={onChange} />
          <label htmlFor='icon_prefix'>search</label>
        </div>
      </div>
    </form>
  )
}

export default UserFilter
