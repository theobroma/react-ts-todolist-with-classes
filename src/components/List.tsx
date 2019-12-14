import React from 'react';
import * as cx from 'classnames';
import { connect } from 'react-redux';
// mock data if needed
// import todoarr from '../helpers/mockdata';
import TodoItem from './TodoItem';

class List extends React.Component<any, any> {
  _filterTodos = (todo: any) =>
    this.props.filter === 'SHOW_ALL' ||
    (this.props.filter === 'SHOW_ACTIVE' && !todo.completed) ||
    (this.props.filter === 'SHOW_COMPLETED' && todo.completed);

  _renderToggleAll(completedCount: any) {
    const { todos, activeTodoCount, handleTodoToggleAll } = this.props;
    if (todos.length) {
      return (
        <input
          className="toggle-all"
          type="checkbox"
          onChange={handleTodoToggleAll}
          // checked={activeTodoCount === 0}
        />
      );
    }
    return null;
  }

  // _renderTodos() {
  //   const { todos, handleTodoRemove } = this.props;
  //   //mock with todoarr if needed
  //   return todos.filter(this._filterTodos).map((todo: any) => (
  //     <TodoItem
  //       key={todo._id}
  //       todo={todo}
  //       // addTodo={this.props.addTodo}
  //       handleTodoRemove={this.props.handleTodoRemove}
  //       // toggleTodo={this.props.toggleTodo}
  //       // editTodo={this.props.editTodo}
  //     />
  //   ));
  // }

  renderTodos() {
    const { todos = [] } = this.props;

    return todos
      .filter(this._filterTodos)
      .map((todo: any) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          handleTodoRemove={this.props.handleTodoRemove}
          handleTodoToggle={this.props.handleTodoToggle}
        />
      ));
  }

  render() {
    const { completedCount } = this.props;
    return (
      <section className="main">
        {this._renderToggleAll(completedCount)}
        <label htmlFor="toggle-all" />
        <ul className="todo-list">{this.renderTodos()}</ul>
      </section>
    );
  }
}

// List.defaultProps = {
//   todos: [],
// };

export default List;
