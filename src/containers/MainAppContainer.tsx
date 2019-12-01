import { connect, useSelector, useDispatch } from 'react-redux';
import * as React from 'react';
import { addTodo, handleTodoRemove, handleTodoToggle } from '../actions';
import HeaderContainer from '../containers/HeaderContainer';
import MainSectionComponent from '../components/MainSection';
// import FooterComponent from '../components/Footer';

const MainApp = (props: any) => {
  const todos = useSelector((state) => state.todos.data);
  const dispatch = useDispatch();
  return (
    <div>
      {/*Header*/}
      <HeaderContainer />
      {/*Main*/}
      <MainSectionComponent
        todos={todos}
        handleTodoRemove={props.handleTodoRemove}
        handleTodoToggle={props.handleTodoToggle}
      />
    </div>
  );
};

export default connect(null, { handleTodoRemove, handleTodoToggle })(MainApp);
