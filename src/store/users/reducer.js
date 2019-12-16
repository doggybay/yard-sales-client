import * as constants from './constants'

let initialState = {
  all: [],
  oneUser: {},
  loggedInUser: {},
  err: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_ALL_USERS_PENDING:
    case constants.FETCH_ONE_USER_PENDING:
    case constants.USER_LOGIN_PENDING:
    case constants.EDIT_USER_PENDING:
    case constants.ADD_NEW_USER_PENDING:
    case constants.REMOVE_USER_PENDING:
      return state
    
    case constants.FETCH_ALL_USERS_FAILED:
    case constants.FETCH_ONE_USER_FAILED:
    case constants.USER_LOGIN_FAILED:
    case constants.EDIT_USER_FAILED:
    case constants.ADD_NEW_USER_FAILED:
    case constants.REMOVE_USER_FAILED:
      return { ...state, err: action.payload}
    
    case constants.FETCH_ALL_USERS_SUCCESS:
      return { ...state, all: action.payload }
    
    case constants.FETCH_ONE_USER_SUCCESS:
      return { ...state, oneUser: action.payload }
    
    case constants.USER_LOGIN_SUCCESS:
      return { ...state, loggedInUser: action.payload }
    
    
    default:
      return state
  }
}