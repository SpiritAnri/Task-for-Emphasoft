import React, { useEffect, useContext } from 'react'
import UserContext from '../../context/user/userContext'

const Users = () => {
  const userContext = useContext(UserContext)

  const { getUsers, users, sortUsersById, orderType } = userContext

  useEffect(() => {
    getUsers()

    //eslint-disable-next-line
  }, [])

  const iconType =
    orderType === 'asc' ? 'keyboard_arrow_up' : 'keyboard_arrow_down'

  return (
    <table className='highlight responsive-table'>
      <thead>
        <tr>
          <th onClick={sortUsersById}>
            Id
            <i className='material-icons'>{iconType}</i>
          </th>
          <th>Username</th>
          <th>First name</th>
          <th>Last name</th>
        </tr>
      </thead>
      <tbody>
        {users.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.username}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Users
