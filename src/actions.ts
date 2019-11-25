export const REQUEST = '_REQUEST';
export const SUCCESS = '_SUCCESS';
export const ERROR = '_ERROR';

export const ADD_TODO = 'ADD_TODO';

export const addTodo = (todo: any) => {
  // console.log(todo);
  return { type: ADD_TODO + REQUEST, payload: todo };
};
