import * as constants from './constants'

let initialState = {
  all: [],
  one: {},
  err: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    
    case constants.FETCH_ALL_SALES_PENDING:
    case constants.FETCH_ONE_SALE_PENDING:
    case constants.ADD_NEW_SALE_PENDING:
    case constants.EDIT_SALE_PENDING:
    case constants.REMOVE_SALE_PENDING:
      return state
    
    case constants.FETCH_ALL_SALES_FAILED:
    case constants.FETCH_ONE_SALE_FAILED:
    case constants.ADD_NEW_SALE_FAILED:
    case constants.EDIT_SALE_FAILED:
    case constants.REMOVE_SALE_FAILED:
      return { ...state, err: action.payload }
    
    case constants.FETCH_ALL_SALES_SUCCESS:
      return { ...state, all: action.payload }
    
    case constants.FETCH_ONE_SALE_SUCCESS:
      return { ...state, one: action.payload }
    
    case constants.ADD_NEW_SALE_SUCCESS:
      return { ...state, all: [...state.all, action.payload] }
    
    case constants.EDIT_SALE_SUCCESS:
      return {
        ...state,
        all: state.all.reduce((newSales, sale) => {
          if (!newSales.includes(sale.id)) {
            if (sale.id === action.payload.id) {
              newSales.push(action.payload)
            } else {
              newSales.push(sale)
            }
          }
          return newSales
        }, [])
      }
    
    case constants.REMOVE_SALE_SUCCESS:
      return {
        ...state,
        all: state.all.filter(sale => sale.id !== action.payload.id)
      }
    
    default:
      return state
  }
}

