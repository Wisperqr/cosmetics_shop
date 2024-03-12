import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import { userReducer } from "./user/userReducer";
import { productsReducer } from "./products/productsReducer";
import { blogsReducer } from "./blogs/blogsReducer";
import { ordersReducer } from "./orders/ordersReducer";

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  blogs: blogsReducer,
  orders: ordersReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
