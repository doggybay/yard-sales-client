import { createStore, combineReducers, applyMiddleware } from 'redux'

//dev tools
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

//individual reducers


//combined reducer
const rootReducer = combineReducers({ })

//middleware array
const middleware = [thunk, logger]

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))