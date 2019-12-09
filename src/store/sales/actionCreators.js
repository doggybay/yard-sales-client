import axios from 'axios'

import * as actions from './actions'
import * as BASE_URL from '../locations'



export const fetchAllSales = () => {

  return async (dispatch) => {
    try {
      dispatch(actions.fetchAllSalesPending())

      const res = await axios.get(`${BASE_URL.local}/sales`)

      dispatch(actions.fetchAllSaleSuccess(res.data))

    } catch (err) {
      dispatch(actions.fetchAllSalesFailed(err))
    }
  }
}

export const fetchOneSale = (id) => {

  return async (dispatch) => {
    try {
      dispatch(actions.fetchOneSalePending())

      const res = await axios.get(`${BASE_URL.local}/sales/${id}`)

      dispatch(actions.fetchOneSaleSuccess(res.data))

    } catch (err) {
      dispatch(actions.fetchOneSaleFailed(err))
    }
  }
}

export const editSale = (id) => {

  return async (dispatch) => {
    try {
      dispatch(actions.editSalePending())

      const res = await axios.patch(`${BASE_URL.local}/sales/${id}`)

      dispatch(actions.editSaleSuccess(res.data))

    } catch (err) {
      dispatch(actions.editSaleFailed(err))
    }
  }
}

export const addNewSale = () => {
  return async (dispatch) => {
    try {
      dispatch(actions.addNewSalePending())

      const res = await axios.post(`${BASE_URL.local}/sales`)

      dispatch(actions.addNewSaleSuccess(res.data))

    } catch (err) {
      dispatch(actions.addNewSaleFailed(err))
    }
  }
}

export const deleteSale = () => {
  return async (dispatch) => {
    try {
      dispatch(actions.removeSalePending())

      const res = await axios.delete(`${BASE_URL.local}/sales`)

      dispatch(actions.removeSaleSuccess(res.data))

    } catch (err) {
      dispatch(actions.removeSaleFailed(err))
    }
  }
}