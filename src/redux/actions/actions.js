import {
  SET_PRODUCTS,
  SET_PRODUCT,
  ADD_TO_CART,
  DELETE_FROM_CART,
  SELECT_FROM_CART,
  SET_QUANTITY,
  CHECKOUT_CART,
  GRID_SIZE_SMALL,
  GRID_SIZE_LARGE,
  SELECTED_CATEGORY,
} from "./types";

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const setProduct = (product) => {
  return {
    type: SET_PRODUCT,
    payload: product,
  };
};

export const addToCart = (product, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: { ...product, quantity },
  };
};

export const deleteFromCart = (id) => {
  return {
    type: DELETE_FROM_CART,
    payload: { id },
  };
};

export const selectFromCart = (id, quantity) => {
  return {
    type: SELECT_FROM_CART,
    payload: { id, quantity },
  };
};

export const setQuantity = (quantity) => {
  return {
    type: SET_QUANTITY,
    payload: quantity,
  };
};

export const checkout = () => {
  return {
    type: CHECKOUT_CART,
  };
};

export const setGridSizeToLarge = () => {
  return {
    type: GRID_SIZE_LARGE,
  };
};

export const setGridSizeToSmall = () => {
  return {
    type: GRID_SIZE_SMALL,
  };
};

export const setSelectedCategory = (selected) => {
  return {
    type: SELECTED_CATEGORY,
    payload: selected,
  };
};
