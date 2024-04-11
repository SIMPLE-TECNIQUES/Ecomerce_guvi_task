// actions.js

// Action types
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGOUT_USER = 'LOGOUT_USER';

// Action creators
export const loginUserSuccess = (userData) => ({
  type: LOGIN_USER_SUCCESS,
  payload: userData,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
