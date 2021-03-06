import axios from 'axios'

import * as actions from './actions'
import BASE_URL from '../location'


export const fetchAllSales = () => {
  

  return async (dispatch) => {
    try {
      dispatch(actions.fetchAllSalesPending())

      const res = await axios.get(`${BASE_URL}/sales`)

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

      const res = await axios.get(`${BASE_URL}/sales/${id}`)

      dispatch(actions.fetchOneSaleSuccess(res.data))

    } catch (err) {
      dispatch(actions.fetchOneSaleFailed(err))
    }
  }
}

export const editSale = (id, updatedSale) => {

  return async (dispatch) => {
    try {
      dispatch(actions.editSalePending())

      const res = await axios.patch(`${BASE_URL}/sales/${id}`, updatedSale)

      dispatch(actions.editSaleSuccess(res.data))

    } catch (err) {
      dispatch(actions.editSaleFailed(err))
    }
  }
}

export const addNewSale = (newSale) => {
  return async (dispatch) => {
    try {
      dispatch(actions.addNewSalePending())

      const res = await axios.post(`${BASE_URL}/sales`, newSale)

      dispatch(actions.addNewSaleSuccess(res.data))

    } catch (err) {
      dispatch(actions.addNewSaleFailed(err))
    }
  }
}

export const deleteSale = (id) => {
  return async (dispatch) => {
    try {
      dispatch(actions.removeSalePending())

      const res = await axios.delete(`${BASE_URL}/sales/${id}`)

      dispatch(actions.removeSaleSuccess(res.data))

    } catch (err) {
      dispatch(actions.removeSaleFailed(err))
    }
  }
}