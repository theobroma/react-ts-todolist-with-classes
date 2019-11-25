import { combineReducers } from 'redux';

// import {
//   FETCH_USERS_PENDING,
//   FETCH_USERS_REJECTED,
//   FETCH_USERS_FULFILLED,
//   ADD_USER_PENDING,
//   ADD_USER_FULFILLED,
//   REMOVE_USER_PENDING,
//   REMOVE_USER_FULFILLED,
// } from './actions';

export const usersInitialState = {
  data: [],
  pending: false,
  errorMessage: '',
};

function todos(state = usersInitialState, action) {
  return state;
}

export default combineReducers({ todos });
