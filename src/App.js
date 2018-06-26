import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import CSSModules from 'react-css-modules';

import TabletFrame from './components/TabletFrame'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TabletFrame>Hallo</TabletFrame>
      </div>
    );
  }
}

export default CSSModules(App, styles);
