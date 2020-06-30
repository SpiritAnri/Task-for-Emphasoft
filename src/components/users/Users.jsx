import React, { useEffect, useContext, Fragment } from 'react'
import UserContext from '../../context/user/userContext'

const Users = () => {
  const userContext = useContext(UserContext)

  const {
    getUsers,
    users,
    sortUsersById,
    orderType,
    filtered,
    loading,
  } = userContext

  useEffect(() => {
    getUsers()

    //eslint-disable-next-line
  }, [])

  const iconType = orderType !== null ? 'sort' : 'menu'
  const iconStyle =
    orderType === 'asc'
      ? { transform: 'scale(1, -1)', verticalAlign: 'middle' }
      : { verticalAlign: 'middle' }

  return (
    <Fragment>
      {users !== null && !loading ? (
        <table className='highlight responsive-table'>
          <thead>
            <tr>
              <th onClick={sortUsersById}>
                <div style={{ width: '5rem' }}>
                  <span style={{ marginRight: '1rem' }}>id</span>
                  <i className='material-icons' style={iconStyle}>
                    {iconType}
                  </i>
                </div>
              </th>
              <th>Username</th>
              <th>First name</th>
              <th>Last name</th>
            </tr>
          </thead>
          <tbody>
            {filtered === null
              ? users.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                  </tr>
                ))
              : filtered.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      ) : (
        <div className='progress blue-grey darken-3'>
          <div className='indeterminate blue-grey lighten-5'></div>
        </div>
      )}
    </Fragment>
  )
}

export default Users
