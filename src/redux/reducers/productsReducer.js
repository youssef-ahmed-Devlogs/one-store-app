import {
  SET_PRODUCTS,
  SET_PRODUCT,
  ADD_TO_CART,
  DELETE_FROM_CART,
  SELECT_FROM_CART,
  SET_QUANTITY,
  GRID_SIZE_LARGE,
  GRID_SIZE_SMALL,
  SELECTED_CATEGORY,
  CHECKOUT_CART,
} from "../actions/types";

const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const productReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SET_PRODUCT:
      return { ...state, product: payload };
    default:
      return state;
  }
};

let uniq = [];

export const addToCartReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      state.push(payload);
      uniq = [
        ...state.reduce((map, obj) => map.set(obj.id, obj), new Map()).values(),
      ];

      return [...uniq];
    case DELETE_FROM_CART: {
      const newState = state.filter((item) => item.id !== payload.id);
      return newState;
    }
    case SELECT_FROM_CART:
      const newState = state.map((item) => {
        if (item.id === payload.id) {
          item.quantity = payload.quantity;
          return item;
        }
        return item;
      });
      return newState;
    case CHECKOUT_CART:
      return [];
    default:
      return state;
  }
};

export const setQuantityReducer = (state = 1, { type, payload }) => {
  switch (type) {
    case SET_QUANTITY:
      return payload;
    default:
      return state;
  }
};

export const gridSizeReducer = (state = { gridSize: "large" }, { type }) => {
  switch (type) {
    case GRID_SIZE_SMALL:
      return { ...state, gridSize: "small" };
    case GRID_SIZE_LARGE:
      return { ...state, gridSize: "large" };
    default:
      return state;
  }
};

export const selectedReducer = (
  state = { selected: "all" },
  { type, payload }
) => {
  switch (type) {
    case SELECTED_CATEGORY:
      return { ...state, selected: payload };
    default:
      return state;
  }
};
