import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import ListContainer from '../containers/ListContainer';
import FooterContainer from '../containers/FooterContainer';

const MainApp = (props: any) => {
  return (
    <div>
      {/*Header*/}
      <HeaderContainer />
      {/*Main*/}
      <ListContainer />
      {/*Footer*/}
      <FooterContainer />
    </div>
  );
};

export default MainApp;
