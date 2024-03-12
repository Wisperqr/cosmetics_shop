import { USER_ACTION_TYPES } from "./userActionTypes";

export const login = (user) => {
  return {
    type: USER_ACTION_TYPES.USER_LOGIN,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: USER_ACTION_TYPES.USER_LOGOUT,
  };
};

export const setUsers = (users) => {
  return {
    type: USER_ACTION_TYPES.SET_ALL_USERS,
    payload: users,
  };
};

export const addProductInCart = (product) => {
  return {
    type: USER_ACTION_TYPES.SET_PRODUCT_IN_CART,
    payload: product,
  };
};

export const clearCart = () => {
  return {
    type: USER_ACTION_TYPES.CLEAR_CART,
  };
};

export const deleteProductFromCart = (product) => {
  return {
    type: USER_ACTION_TYPES.DELETE_ITEM_FROM_CART,
    payload: product,
  };
};

export const addProductsToFavorites = (product) => {
  return {
    type: USER_ACTION_TYPES.ADD_PRODUCT_TO_FAVORITES,
    payload: product,
  };
};

export const removeProductFromFavorites = (product) => {
  return {
    type: USER_ACTION_TYPES.REMOVE_PRODUCT_FROM_FAVORITES,
    payload: product,
  };
};

export const getAllFavoritesFromAPI = (favorites) => {
  return {
    type: USER_ACTION_TYPES.GET_ALL_FAVORITES_FROM_API,
    payload: favorites,
  };
};

export const clearFavorites = () => {
  return {
    type: USER_ACTION_TYPES.CLEAR_REDUX_USER_FAVORITES,
  };
};
