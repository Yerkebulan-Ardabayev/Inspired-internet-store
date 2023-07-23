import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from '../Features/navigationSlice';
import colorReducer from "../Features/colorSlice";
import goodsReducer from "../Features/goodsSlice"
import productReducer from "../Features/productSlice";
import favoritesReducer from "../Features/favoritesSlice";
import cartReducer from "../Features/cartSlice";
import searchReducer from "../Features/searchSlice";
import statusServerReducer from "../Features/statusServerSlice";

export const rootReducer = combineReducers({
  navigation: navigationReducer,
  color: colorReducer,
  goods: goodsReducer,
  product: productReducer,
  favorites: favoritesReducer,
  cart: cartReducer,
  search: searchReducer,
  statusServer: statusServerReducer,
})