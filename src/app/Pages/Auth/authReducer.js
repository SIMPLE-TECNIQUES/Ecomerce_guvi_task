// reducers.js

import { LOGIN_USER_SUCCESS, LOGOUT_USER } from './action';

// Initial state for user authentication
const initialState = {
  isAuthenticated: false,
  user: null,
};

// Reducer function for user authentication
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
