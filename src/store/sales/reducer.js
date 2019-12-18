import * as constants from './constants'

let initialState = {
  all: [],
  one: {},
  err: {}
}

export default (state = initialState, action) => {

  const updateState = (stateArr, updatedObj) => {
  let newState = []

  for (let i= 0; i < stateArr.length; i++){
    if(!newState.includes(stateArr[i].id)){
      if(stateArr[i].id === updatedObj.id){
        newState.push(updatedObj)
        } else {
        newState.push(stateArr[i])
      }
    } else{
      console.log('there')
    }
    

    }

  return newState
  }
  
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
        all: updateState(state.all, action.payload)
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

