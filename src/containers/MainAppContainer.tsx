import { connect, useSelector, useDispatch } from 'react-redux';
import * as React from 'react';
import MainSectionComponent from '../components/MainSection';

const MainApp = (props: any) => {
  const todos = useSelector((state) => state.todos.data);
  return (
    <div>
      {/*Main*/}
      <MainSectionComponent todos={todos} />
    </div>
  );
};

export default connect(null, {})(MainApp);
