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









