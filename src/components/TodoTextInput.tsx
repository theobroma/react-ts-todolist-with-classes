import * as React from 'react';
import * as classNames from 'classnames';

class TodoTextInput extends React.Component<any, any> {
  static defaultProps = {
    text: '',
    placeholder: 'What needs to be done?',
    editing: false,
    newTodo: false,
  };

  state = {
    text: '',
  };

  handleSubmit = (e: any) => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  };

  handleChange(e: any) {
    //console.log('handleChange');
    this.setState({ text: e.target.value });
  }

  handleBlur(e: any) {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  }

  render() {
    return (
      <React.Fragment>
        <input
          // className={classNames({
          //   edit: this.props.editing,
          //   'new-todo': this.props.newTodo,
          // })}
          className="new-todo"
          type="text"
          placeholder={this.props.placeholder}
          autoFocus={true}
          value={this.state.text}
          onBlur={this.handleBlur.bind(this)}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleSubmit.bind(this)}
        />
        {/* <pre>{JSON.stringify(this.state, null, 4)}</pre> */}
      </React.Fragment>
    );
  }
}

export default TodoTextInput;
