import * as React from 'react';
import * as cx from 'classnames';
import { connect } from 'react-redux';
// mock data if needed
// import todoarr from '../helpers/mockdata';
import TodoItem from './TodoItem';

export default class MainSection extends React.Component<any, any> {
  _filterTodos = (todo: any) =>
    this.props.filter === 'SHOW_ALL' ||
    (this.props.filter === 'SHOW_ACTIVE' && !todo.completed) ||
    (this.props.filter === 'SHOW_COMPLETED' && todo.completed);
  //TODO: implement toggle-all
  // <input className="toggle-all" type="checkbox" checked={completedCount === todos.length} />
  _renderToggleAll(completedCount: any) {
    const { todos } = this.props;
    if (todos.length) {
      return <input className="toggle-all" type="checkbox" />;
    }
    return null;
  }

  _renderTodos() {
    const { todos } = this.props;
    //mock with todoarr if needed
    return todos.filter(this._filterTodos).map((todo: any) => (
      <TodoItem
        key={todo._id}
        todo={todo}
        // addTodo={this.props.addTodo}
        // removeTodo={this.props.removeTodo}
        // toggleTodo={this.props.toggleTodo}
        // editTodo={this.props.editTodo}
      />
    ));
  }

  renderTodos() {
    const { todos } = this.props;
    return todos.map((todo: any) => <TodoItem key={todo._id} todo={todo} />);
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
