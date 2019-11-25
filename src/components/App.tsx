import * as React from 'react';
import { hot } from 'react-hot-loader';
import MainApp from '../containers/MainApp';

// const reactLogo = require('./../assets/img/react_logo.svg');
import './../assets/scss/index.scss';

class App extends React.Component<{}, undefined> {
  public render() {
    return (
      <div className="App">
        <section className="todoapp">
          <MainApp />
        </section>
      </div>
    );
  }
}

declare let module: object;

export default hot(module)(App);
