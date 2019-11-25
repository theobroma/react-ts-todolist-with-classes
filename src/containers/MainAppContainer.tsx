import { connect, useSelector, useDispatch } from 'react-redux';
import * as React from 'react';
import HeaderComponent from '../components/Header';
import MainSectionComponent from '../components/MainSection';
// import FooterComponent from '../components/Footer';

const MainApp = (props: any) => {
  const todos = useSelector((state) => state.todos.data);
  return (
    <div>
      {/*Header*/}
      <HeaderComponent
      // addTodo={this.props.addTodo}
      />
      {/*Main*/}
      <MainSectionComponent todos={todos} />
    </div>
  );
};

export default connect(null, {})(MainApp);
