import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import FooterComponent from '../components/Footer';

const Footer = (props: any) => {
  const dispatch = useDispatch();
  return (
    <FooterComponent
    // addTodo={this.props.addTodo}
    //   addTodo={() => dispatch(addTodo('example123123'))}
    //   addTodo={props.addTodo}
    />
  );
};

export default connect(null, {})(Footer);
