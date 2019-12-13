import { combineReducers } from 'redux';
import produce from 'immer';
import uuidv4 from 'uuid/v4';

import * as types from './actions';

export const usersInitialState = {
  data: [],
  pending: false,
  errorMessage: '',
};

const todos = produce((draft, action) => {
  // console.log(action);
  switch (action.type) {
    // case ADD_TODO + REQUEST:
    //   return {
    //     ...state,
    //     pending: false,
    //     data: [
    //       {
    //         _id: uuidv4(),
    //         completed: false,
    //         text: action.payload,
    //       },
    //       ...state.data,
    //     ],
    //   };
    case types.ADD_TODO + types.REQUEST: {
      const value = {
        _id: uuidv4(),
        completed: false,
        text: action.payload,
      };
      draft.data.push(value);
      return draft;
    }

    // case REMOVE_TODO + REQUEST:
    //   return {
    //     ...state,
    //     pending: false,
    //     data: state.data.filter((todo: any) => todo._id !== action.payload),
    //   };
    case types.REMOVE_TODO + types.REQUEST: {
      draft.data = draft.data.filter((todo: any) => todo._id !== action.payload);
      return draft;
    }
    // case TOGGLE_TODO + REQUEST:
    //   return {
    //     ...state,
    //     data: state.data.map((todo: any) => {
    //       if (todo._id === action.payload.id) {
    //         return { ...todo, completed: !todo.completed };
    //       }
    //       return todo;
    //     }),
    //   };
    // case TODOS_REMOVE_COMPLETED + REQUEST:
    //   return {
    //     ...state,
    //     data: state.data.filter((todo: any) => !todo.completed),
    //   };

    // case TODOS_REMOVE_COMPLETED_FULFILLED:
    //   return {
    //     ...state,
    //     data: state.data.filter((todo: any) => !todo.completed)
    //   };
    // case EDIT_TODO_FULFILLED:
    //   return {
    //     ...state,
    //     data: state.data.map((todo: any) => {
    //       if (todo._id === action.id) {
    //         return { ...todo, text: action.text };
    //       }
    //       return todo;
    //     })
    //   };
    default:
      return draft;
  }
}, usersInitialState);

//filter reducer
const filter = (state = 'SHOW_ALL', action: any) => {
  if (action.type === types.SET_FILTER) {
    return action.filter;
  }
  return state;
};

export default combineReducers({ todos, filter });
