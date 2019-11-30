export const REQUEST = '_REQUEST';
export const SUCCESS = '_SUCCESS';
export const ERROR = '_ERROR';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (todo: any) => {
  // console.log(todo);
  return { type: ADD_TODO + REQUEST, payload: todo };
};

export const handleTodoRemove = (_id: string) => {
  // console.log(id);
  return { type: REMOVE_TODO + REQUEST, payload: _id };
};
