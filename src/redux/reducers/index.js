import { combineReducers } from "redux";
import {
  productsReducer,
  gridSizeReducer,
  selectedReducer,
  productReducer,
  addToCartReducer,
  setQuantityReducer,
} from "./productsReducer";

const reducers = combineReducers({
  products: productsReducer,
  product: productReducer,
  gridSize: gridSizeReducer,
  selected: selectedReducer,
  cart: addToCartReducer,
  quantity: setQuantityReducer,
});

export default reducers;
