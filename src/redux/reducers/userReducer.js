import {
  USERS_REQUEST,
  USERS_SUCCESS,
  USERS_FAILURE,
} from '../types/userTypes'

const initialState = {
  loading: true,
  users: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case USERS_SUCCESS:
      return {
        error: '',
        loading: false,
        users: action.payload
      }
    case USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      }
    default: return state
  }
}

export default reducer