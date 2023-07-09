import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from '../Features/navigationSlice';
import colorReducer from "../Features/colorSlice";
import goodsReducer from "../Features/goodsSlice"

export const rootReducer = combineReducers({
  navigation: navigationReducer,
  color: colorReducer,
  goods: goodsReducer,
})