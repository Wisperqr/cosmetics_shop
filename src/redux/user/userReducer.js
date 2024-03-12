import { USER_ACTION_TYPES } from "./userActionTypes";

const initialState = {
  users: [],
  authUser: null,
  cart: [],
  favorites: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.USER_LOGIN:
      return {
        ...state,
        authUser: action.payload,
      };
    case USER_ACTION_TYPES.USER_LOGOUT:
      return {
        ...state,
        authUser: null,
      };
    case USER_ACTION_TYPES.SET_ALL_USERS:
      return {
        ...state,
        users: [...action.payload],
      };
    case USER_ACTION_TYPES.SET_PRODUCT_IN_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case USER_ACTION_TYPES.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case USER_ACTION_TYPES.DELETE_ITEM_FROM_CART:
      return {
        ...state,
        cart: [...state.cart.filter((prod) => prod.id !== action.payload.id)],
      };
    case USER_ACTION_TYPES.ADD_PRODUCT_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case USER_ACTION_TYPES.REMOVE_PRODUCT_FROM_FAVORITES:
      return {
        ...state,
        favorites: [
          ...state.favorites.filter((prod) => prod.id !== action.payload.id),
        ],
      };
    case USER_ACTION_TYPES.GET_ALL_FAVORITES_FROM_API:
      return {
        ...state,
        favorites: [...action.payload],
      };
    case USER_ACTION_TYPES.CLEAR_REDUX_USER_FAVORITES:
      return {
        ...state,
        favorites: [],
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
