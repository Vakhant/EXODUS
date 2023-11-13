import { combineReducers, createStore, legacy_createStore } from "redux"
import { profileReducer } from "./reducers/test-reduucer"
import { infoReducer } from './reducers/info-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    infoPage: infoReducer
})

const store = legacy_createStore(reducers)
export default store