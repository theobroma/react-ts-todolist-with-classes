import { connect, useSelector, useDispatch } from 'react-redux';
import { handleTodoRemove, handleTodoToggle } from '../actions';
import * as React from 'react';
import ListComponent from '../components/List';

const List = (props: any) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.data);
  return (
    <ListComponent
      todos={todos}
      handleTodoRemove={props.handleTodoRemove}
      handleTodoToggle={props.handleTodoToggle}
    />
  );
};

export default connect(null, { handleTodoRemove, handleTodoToggle })(List);
