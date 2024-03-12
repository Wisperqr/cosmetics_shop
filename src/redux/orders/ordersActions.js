import { ORDERS_ACTION_TYPES } from "./ordersActionTypes";

export const setAllOrders = (orders) => {
  return {
    type: ORDERS_ACTION_TYPES.SET_ALL_ORDERS,
    payload: orders,
  };
};
