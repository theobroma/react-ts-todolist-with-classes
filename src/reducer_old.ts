import { combineReducers } from 'redux';
import uuidv4 from 'uuid/v4';

import {
  REQUEST,
  SUCCESS,
  ERROR,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  TODOS_REMOVE_COMPLETED,
  SET_FILTER,
} from './actions';

export const usersInitialState = {
  data: [],
  pending: false,
  errorMessage: '',
};

function todos(state = usersInitialState, action) {
  // console.log(action);
  switch (action.type) {
    case ADD_TODO + REQUEST:
      return {
        ...state,
        pending: false,
        data: [
          {
            _id: uuidv4(),
            completed: false,
            text: action.payload,
          },
          ...state.data,
        ],
      };
    case REMOVE_TODO + REQUEST:
      return {
        ...state,
        pending: false,
        data: state.data.filter((todo: any) => todo._id !== action.payload),
      };
    case TOGGLE_TODO + REQUEST:
      return {
        ...state,
        data: state.data.map((todo: any) => {
          if (todo._id === action.payload.id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        }),
      };
    case TODOS_REMOVE_COMPLETED + REQUEST:
      return {
        ...state,
        data: state.data.filter((todo: any) => !todo.completed),
      };

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
      return state;
  }
}

//filter reducer
function filter(state = 'SHOW_ALL', action: any) {
  if (action.type === SET_FILTER) {
    return action.filter;
  }
  return state;
}

export default combineReducers({ todos, filter });
