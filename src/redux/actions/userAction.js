import axios from 'axios'
import {
  USERS_REQUEST,
  USERS_SUCCESS,
  USERS_FAILURE,
} from '../types/userTypes'

export const fetchUsersRequest = () => {
  return {
    type: USERS_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: USERS_FAILURE,
    payload: error
  }
}

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest)
    axios.get('https://arsene.azurewebsites.net/User')
      .then(response => {
        const users = response.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchUsersFailure(errorMsg))
      })
  }
}