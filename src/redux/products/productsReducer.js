import { PRODUCTS_ACTION_TYPES } from "./productsActionTypes";

const initialState = {
  allProducts: [],
  filteredProducts: [],
  discountsFilter: false,
  priceFilter: [],
  categoryFilter: "all",
  searchInputText: "",
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_ACTION_TYPES.SET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: [...action.payload],
      };
    case PRODUCTS_ACTION_TYPES.SET_FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: [...action.payload],
      };
    case PRODUCTS_ACTION_TYPES.SET_CHECKED_DISCOUNTS_FILTER:
      return {
        ...state,
        discountsFilter: !state.discountsFilter,
      };
    case PRODUCTS_ACTION_TYPES.SET_PRICE_FILTER:
      return {
        ...state,
        priceFilter: [...action.payload],
      };
    case PRODUCTS_ACTION_TYPES.SET_CATEGORY_FILTER:
      return {
        ...state,
        categoryFilter: action.payload,
      };
    case PRODUCTS_ACTION_TYPES.ADD_PRODUCT:
      return {
        ...state,
        allProducts: [...state.allProducts, action.payload],
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
