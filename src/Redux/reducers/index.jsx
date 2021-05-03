import { combineReducers } from "redux";
import { scrollPageCircleReducer } from './scrollPageCircle';

export const reducers=combineReducers({
    scrollPageCircle:scrollPageCircleReducer
})