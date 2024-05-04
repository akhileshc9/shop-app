import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
};
const initialCart = {
  products: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProduct = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
export const cartProduct = (state = initialCart, { type, payload }) => {
  switch (type) {
    case ActionTypes.CART_PRODUCT:
      return { ...state, products: [...state.products, payload] };
    case ActionTypes.REMOVE_PRODUCT:
        const filterProducts = state.products.filter((i)=>i.id!==payload)
      return { ...state, products: filterProducts };
    default:
      return state;
  }
};
