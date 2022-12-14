import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux"
import { ProductReducer } from "./products.reducer";
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    productsManager:ProductReducer,
})

const comp = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(rootReducer,comp(applyMiddleware(thunk)))