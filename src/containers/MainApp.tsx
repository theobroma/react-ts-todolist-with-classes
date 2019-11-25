//Very useful template for understanding structure of  https://github.com/tastejs/todomvc-app-css
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import * as cx from 'classnames';
import MainSectionComponent from '../components/MainSection';

class MainApp extends React.Component<any, any> {
  componentDidMount() {
    //this.props.fetchTodos();
  }

  render() {
    const { todos } = this.props;

    return (
      <div>
        {/*Main*/}
        <MainSectionComponent todos={todos} />
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    todos: state.todos.data,
    // currentFilter: state.filter,
  };
}

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
