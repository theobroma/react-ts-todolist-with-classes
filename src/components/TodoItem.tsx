import * as React from 'react';
// import * as cx from 'classnames';

import { ITodoItem } from '../interfaces';

const TodoItem = (props: ITodoItem) => {
  const {
    todo: { _id, text, completed },
  } = props;

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
        // onClick={() => removeTodo(_id)}
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

export default TodoItem;
