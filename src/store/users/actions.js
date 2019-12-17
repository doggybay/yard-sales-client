import * as constants from './constants'

export const fetchAllUsersPending = () => ({
  type: constants.FETCH_ALL_USERS_PENDING
})

export const fetchAllUsersSuccess = (users) => ({
  type: constants.FETCH_ALL_USERS_SUCCESS,
  payload: users
})

export const fetchAllUsersFailed = (err) => ({
  type: constants.FETCH_ALL_USERS_FAILED,
  payload: err
})

export const fetchOneUserPending = () => ({
  type: constants.FETCH_ONE_USER_PENDING
})

export const fetchOneUserSuccess = (user) => ({
  type: constants.FETCH_ONE_USER_SUCCESS,
  payload: user
})

export const fetchOneUserFailed = (err) => ({
  type: constants.FETCH_ONE_USER_FAILED,
  payload: err
})

export const userLoginPending = () => ({
  type: constants.USER_LOGIN_PENDING
})

export const userLoginSuccess = (loginUser) => ({
  type: constants.USER_LOGIN_SUCCESS,
  payload: loginUser
})

export const userLoginFailed = (err) => ({
  type: constants.USER_LOGIN_FAILED,
  payload: err
})

export const addNewUserPending = () => ({
  type: constants.ADD_NEW_USER_PENDING
})

export const addNewUserSuccess = (newUser) => ({
  type: constants.ADD_NEW_USER_SUCCESS,
  payload: newUser
})

export const addNewUserFailed = (err) => ({
  type: constants.ADD_NEW_USER_FAILED,
  payload: err
})

export const editUserPending = () => ({
  type: constants.EDIT_USER_PENDING
})

export const editUserSuccess = (updatedUser) => ({
  type: constants.EDIT_USER_SUCCESS,
  payload: updatedUser
})

export const editUserFailed = (err) => ({
  type: constants.EDIT_USER_FAILED,
  payload: err
})

export const removeUserPending = () => ({
  type: constants.EDIT_USER_PENDING
})

export const removeUserSuccess = (deletedUser) => ({
  type: constants.EDIT_USER_SUCCESS,
  payload: deletedUser
})

export const removeUserFailed = (err) => ({
  type: constants.EDIT_USER_FAILED,
  payload: err
})