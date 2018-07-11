import React, { Component } from 'react';
import styles from './App.scss';
import CSSModules from 'react-css-modules';
import { Switch, Route } from 'react-router-dom'

import Home from 'pages/Home'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
      
      </Switch>
    );
  }
}

export default CSSModules(App, styles);
