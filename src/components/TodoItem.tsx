import * as React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
// import * as cx from 'classnames';

import { ITodoItem } from '../interfaces';

const TodoItem = (props: ITodoItem) => {
  const {
    todo: { _id, text, completed },
    handleTodoRemove,
  } = props;

  const dispatch = useDispatch();

  let element;
  element = (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        // onChange={() => toggleTodo(_id, completed, text)}
      />
      <label
        htmlFor="itself"
        //  onDoubleClick={this.handleDoubleClick}
      >
        {text}
      </label>
      <button
        className="destroy"
        //  onClick={() => handleTodoRemove(_id)}
        onClick={() => dispatch(handleTodoRemove(_id))}
      />
    </div>
  );
  return (
    <li
    // className={cx({ completed: completed, editing: this.state.editing })}
    >
      {element}
    </li>
  );
};

export default connect(null, {})(TodoItem);
