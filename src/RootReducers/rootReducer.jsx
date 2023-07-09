import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from '../Features/navigationSlice';

export const rootReducer = combineReducers({
  navigation: navigationReducer,
})