import {applyMiddleware,legacy_createStore} from "redux"
import thunk from "redux-thunk"
import Reducer from "./reducer"


const store=legacy_createStore(Reducer,applyMiddleware(thunk))
export default store