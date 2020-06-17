import { GET_USERS, FILTER_USERS, CLEAR_FILTER, SORT_USERS } from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      }
    case FILTER_USERS:
      return {
        ...state,
        filtered: state.users.filter(user => {
          const regex = new RegExp(`${action.payload}`, 'gi')
          return user.username.match(regex)
        }),
      }
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      }
    case SORT_USERS:
      return {
        ...state,
        users: action.payload,
        orderType: state.orderType === 'asc' ? 'desc' : 'asc',
      }
    default:
      return state
  }
}
