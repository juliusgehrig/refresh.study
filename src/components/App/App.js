import React, { Component } from 'react';
import styles from './App.scss';
import CSSModules from 'react-css-modules';
import { Switch, Route } from 'react-router-dom'

import Home from 'pages/Home'
import Process from 'pages/Process'
import Linklist from 'pages/Linklist'
import Header from 'components/Header'

class App extends Component {
  render() {
    return (

      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/process' component={Process} />
          <Route exact path='/linklist' component={Linklist} />
        </Switch>
      </div>
    );
  }
}

export default CSSModules(App, styles);
