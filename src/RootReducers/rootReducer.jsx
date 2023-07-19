import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from '../Features/navigationSlice';
import colorReducer from "../Features/colorSlice";
import goodsReducer from "../Features/goodsSlice"
import productReducer from "../Features/productSlice";
import favoritesReducer from "../Features/favoritesSlice";

export const rootReducer = combineReducers({
  navigation: navigationReducer,
  color: colorReducer,
  goods: goodsReducer,
  product: productReducer,
  favorites: favoritesReducer,
})