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
      const itemIndex = state.products.findIndex(item => item.id === payload);
      if (itemIndex !== -1) {
        const updatedCartItems = [...state.products];
        
        if (updatedCartItems[itemIndex].quantity > 1) {
          updatedCartItems[itemIndex].quantity -= 1;
        } else {
         
          updatedCartItems.splice(itemIndex, 1);
        }
        return {
          ...state,
          products: updatedCartItems,
        };
      }
      return state;
    default:
      return state;
  }
};
