import {createStore , applyMiddleware} from 'redux'

import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import Reducers from './index'


const middleware = [thunk]

const store = createStore(Reducers , composeWithDevTools(applyMiddleware(...middleware)))

export default store

