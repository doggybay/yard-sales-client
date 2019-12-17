import axios from 'axios'
import * as actions from './actions'
import BASE_URL from '../location'



export const fetchAllUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(actions.fetchAllUsersPending())

      const res = await axios.get(`${BASE_URL}/users`)

      dispatch(actions.fetchAllUsersSuccess(res.data))
    } catch (err) {
      dispatch(actions.fetchAllUsersFailed(err))
    }
  }
}

export const fetchOneUser = (id) => {
  return async (dispatch) => {
    try {
      dispatch(actions.fetchOneUserPending())

      const res = await axios.get(`${BASE_URL}/users/${id}`)

      dispatch(actions.fetchOneUserSuccess(res.data))
    } catch (err) {
      dispatch(actions.fetchOneUserFailed(err))
    }
  }
}

export const userLogin = (creds, history) => {
  return async (dispatch) => {
    try {
      dispatch(actions.userLoginPending())

      const res = await axios.post(`${BASE_URL}/login`, creds)

      dispatch(actions.userLoginSuccess(res.data))
      history.push('/')
    } catch (err) {
      dispatch(actions.userLoginFailed(err))
    }
  }
}

export const editUser = (id) => {
  return async (dispatch) => {
    try {
      dispatch(actions.editUserPending())

      const res = await axios.patch(`${BASE_URL}/users/${id}`)

      dispatch(actions.editUserSuccess(res.data))

    } catch (err) {
      dispatch(actions.editUserFailed(err))
    }
  }
}

export const addNewUser = () => {
  return async (dispatch) => {
    try {
      dispatch(actions.addNewUserPending())

      const res = await axios.post(`${BASE_URL}/users`)

      dispatch(actions.addNewUserSuccess(res.data))

    } catch (err) {
      dispatch(actions.addNewUserFailed(err))

    }
  }
}

export const removeUser = (id) => {
  return async (dispatch) => {
    try {
      dispatch(actions.removeUserPending())

      const res = await axios.delete(`${BASE_URL}/users/${id}`)

      dispatch(actions.removeUserSuccess(res.data))

    } catch (err) {
      dispatch(actions.removeUserFailed(err))

    }
  }
}