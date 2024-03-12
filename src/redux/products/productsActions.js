import { PRODUCTS_ACTION_TYPES } from "./productsActionTypes";

export const setAllProducts = (products) => {
  return {
    type: PRODUCTS_ACTION_TYPES.SET_ALL_PRODUCTS,
    payload: products,
  };
};

export const setFilteredProducts = (products) => {
  return {
    type: PRODUCTS_ACTION_TYPES.SET_FILTERED_PRODUCTS,
    payload: products,
  };
};

export const setCheckedDiscountsFilter = () => {
  return {
    type: PRODUCTS_ACTION_TYPES.SET_CHECKED_DISCOUNTS_FILTER,
  };
};

export const setPriceFilter = (prices) => {
  return {
    type: PRODUCTS_ACTION_TYPES.SET_PRICE_FILTER,
    payload: prices,
  };
};

export const setCategoryFilter = (category) => {
  return {
    type: PRODUCTS_ACTION_TYPES.SET_CATEGORY_FILTER,
    payload: category,
  };
};

export const addProductRedux = (product) => {
  return {
    type: PRODUCTS_ACTION_TYPES.ADD_PRODUCT,
    payload: product,
  };
};
