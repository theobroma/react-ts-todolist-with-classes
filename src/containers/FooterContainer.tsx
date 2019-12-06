import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { removeCompleted } from '../actions';
import FooterComponent from '../components/Footer';

const Footer = (props: any) => {
  const dispatch = useDispatch();
  return (
    <FooterComponent
      // addTodo={this.props.addTodo}
      //   addTodo={() => dispatch(addTodo('example123123'))}
      removeCompleted={props.removeCompleted}
    />
  );
};

export default connect(null, { removeCompleted })(Footer);
