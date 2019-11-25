import * as React from 'react';
import * as cx from 'classnames';
//mock data if needed
// import { Todo, IState } from '../model';
// import TodoTextInput from './TodoTextInput';

// interface TodoItemProps {
//   todo: Todo;
//   key?: any;
// }

// interface TodoItemState {
//   completed: boolean;
// }

export class TodoItem extends React.Component<any, any> {
  render() {
    const {
      todo: { completed, text, _id },
    } = this.props;
    console.log(this.props);

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
  }
}

export default TodoItem;
