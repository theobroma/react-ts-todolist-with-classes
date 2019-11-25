import { connect, useSelector, useDispatch } from 'react-redux';
import * as React from 'react';
import { addTodo } from '../actions';
import HeaderComponent from '../components/Header';
import MainSectionComponent from '../components/MainSection';
// import FooterComponent from '../components/Footer';

const MainApp = (props: any) => {
  const todos = useSelector((state) => state.todos.data);
  const dispatch = useDispatch();
  return (
    <div>
      {/*Header*/}
      <HeaderComponent
        // addTodo={this.props.addTodo}
        addTodo={() => dispatch(addTodo('example123123'))}
      />
      {/*Main*/}
      <MainSectionComponent todos={todos} />
    </div>
  );
};

export default connect(null, {})(MainApp);
