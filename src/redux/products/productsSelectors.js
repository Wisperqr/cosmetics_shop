export const getAllProducts = (state) => {
  return state.products.allProducts;
};

export const getFilteredProducts = (state) => {
  return state.products.filteredProducts;
};

export const getIsCheckedDiscountsFilter = (state) => {
  return state.products.discountsFilter;
};

export const getPriceFilter = (state) => {
  return state.products.priceFilter;
};

export const getCategoryFilter = (state) => {
  return state.products.categoryFilter;
};
