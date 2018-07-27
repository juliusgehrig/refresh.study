import React, { Component } from 'react';
import styles from './App.scss';
import CSSModules from 'react-css-modules';
import { Switch, Route } from 'react-router-dom'

import Home from 'pages/Home'
import ErrorPage from 'pages/ErrorPage'
import Process from 'pages/Process'
import Linklist from 'pages/Linklist'
import Header from 'components/Header'
import CookieBanner from 'components/CookieBanner'

class App extends Component {
  render() {
    return (

      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={Process} />
          <Route exact path='/reading-list' component={Linklist} />
          <Route path='*' exact={true} component={ErrorPage} />

        </Switch>
        <CookieBanner></CookieBanner>
      </div>
    );
  }
}

export default CSSModules(App, styles);
