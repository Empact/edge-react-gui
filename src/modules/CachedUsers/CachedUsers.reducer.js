import * as ACTION from './CachedUsers.action'
import { LOG_IN_USERNAME } from '../Login/Login.action'

const userList = [
  { id: '1', name: 'foofoo' },
  { id: '2', name: 'foofoo1' },
  { id: '3', name: 'foofoo2' },
  { id: '4', name: 'foofoo3' }
]

export const users = (state = userList, action) => {
  return state
}

export const selectedUserToLogin = (state = null, action) => {
  switch (action.type) {
    case ACTION.SELECT_USER_LOGIN :
      return action.data.id

    case ACTION.REMOVE_USER_LOGIN :
      return null

    default:
      return state
  }
}