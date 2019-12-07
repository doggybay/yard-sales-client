import * as constants from './constants'


//Fetch all sales
export const fetchAllSalesPending = () => ({
  type: constants.FETCH_ALL_SALES_PENDING
})

export const fetchAllSaleSuccess = (sales) => ({
  type: constants.FETCH_ALL_SALES_SUCCESS,
  payload: sales
})

export const fetchAllSalesFailed = (err) => ({
  type: constants.FETCH_ALL_SALES_FAILED,
  payload: err
})

//Fetch one sale
export const fetchOneSalePending = () => ({
  type: constants.FETCH_ONE_SALE_PENDING
})

export const fetchOneSaleSuccess = (sale) => ({
  type: constants.FETCH_ONE_SALE_SUCCESS,
  payload: sale
})

export const fetchOneSaleFailed = (err) => ({
  type: constants.FETCH_ONE_SALE_FAILED,
  payload: err
})


//Update a sale 
export const editSalePending = () => ({
  type: constants.EDIT_SALE_PENDING
})

export const editSaleSuccess = (updatedSale) => ({
  type: constants.EDIT_SALE_SUCCESS,
  payload: updatedSale
})

export const editSaleFailed = (err) => ({
  type: constants.EDIT_SALE_FAILED,
  payload: err
})

//Add a new sale
export const addNewSalePending = () => ({
  type: constants.ADD_NEW_SALE_PENDING
})

export const addNewSaleSuccess = (newSale) => ({
  type: constants.ADD_NEW_SALE_SUCCESS,
  payload: newSale
})

export const addNewSaleFailed = (err) => ({
  type: constants.ADD_NEW_SALE_FAILED,
  payload: err
})

//Remove a sale
export const removeSalePending = () => ({
  type: constants.REMOVE_SALE_PENDING
})

export const removeSaleSuccess = (deletedSale) => ({
  type: constants.REMOVE_SALE_SUCCESS,
  payload: deletedSale
})

export const removeSaleFailed = (err) => ({
  type: constants.REMOVE_SALE_FAILED,
  payload: err
})