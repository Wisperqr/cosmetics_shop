export const getIsUserAuth = (state) => {
  return !!state.user.authUser;
};

export const getUser = (state) => {
  return state.user.authUser;
};

export const getUserId = (state) => {
  return state.user.authUser?.id;
};

export const getAllUsers = (state) => {
  return state.user.users;
};

export const getUserCart = (state) => {
  return state.user.cart;
};

export const getFavoritesProducts = (state) => {
  return state.user.favorites;
};
