import React, { useReducer } from 'react'
import axios from 'axios'
import _ from 'lodash'
import UserReducer from './userReducer'
import UserContext from './userContext'
import {
  GET_USERS,
  FILTER_USERS,
  CLEAR_FILTER,
  SORT_USERS,
  USER_ERROR,
} from '../types'

const UserState = props => {
  const initialState = {
    users: null,
    filtered: null,
    orderType: null,
    loading: true,
  }

  const [state, dispatch] = useReducer(UserReducer, initialState)

  const getUsers = async () => {
    try {
      const res = await axios.get(
        'https://emphasoft-test-assignment.herokuapp.com/api/v1/users/'
      )

      dispatch({
        type: GET_USERS,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: USER_ERROR,
        payload: err.response.msg,
      })
    }
  }

  const filterUsers = text => {
    dispatch({ type: FILTER_USERS, payload: text })
  }

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER })
  }

  const sortUsersById = () => {
    const clonedUsers = state.users.concat()

    const newTypeOrder = state.orderType === 'asc' ? 'desc' : 'asc'

    const sortUsers = _.orderBy(clonedUsers, 'id', newTypeOrder)

    dispatch({
      type: SORT_USERS,
      payload: sortUsers,
    })
  }

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        filtered: state.filtered,
        loading: state.loading,
        orderType: state.orderType,
        getUsers,
        filterUsers,
        clearFilter,
        sortUsersById,
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState
