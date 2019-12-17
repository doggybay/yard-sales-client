import { createStore, combineReducers, applyMiddleware } from 'redux'

//dev tools
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

//individual reducers
import sales from './sales/reducer'
import users from './users/reducer'

//combined reducer
const rootReducer = combineReducers({ sales, users })

//middleware array
const middleware = [thunk, logger]

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))