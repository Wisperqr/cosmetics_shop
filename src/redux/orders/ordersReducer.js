import { ORDERS_ACTION_TYPES } from "./ordersActionTypes";

const initialState = {
  orders: [],
};

export const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDERS_ACTION_TYPES.SET_ALL_ORDERS:
      return {
        ...state,
        orders: [...action.payload],
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
