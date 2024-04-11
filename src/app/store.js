import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import CartSlice from "./Features/Cart/CartSlice";
import CategorySlice from "./Features/Category/CategorySlice";
import ProductSlice from "./Features/Product/ProductSlice";
// import { LOGIN_USER_SUCCESS, LOGOUT_USER } from './actions';
import authReducer from "./Pages/Auth/authReducer";
let initialState = {};
let store = configureStore(
  {
    reducer: {
      auth: authReducer,
      categories: CategorySlice,
      products: ProductSlice,
      carts: CartSlice,
    },
  },
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

setupListeners(store.dispatch);

export default store;
