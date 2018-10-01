import React, { Component } from 'react';
import styles from './App.scss';
import CSSModules from 'react-css-modules';
import { Switch, Route } from 'react-router-dom'

import Home from 'pages/Home'
import ErrorPage from 'pages/ErrorPage'
import Process from 'pages/Process'
import Linklist from 'pages/Linklist'
import Header from 'components/Header'
class RefreshTimer extends Component {
  constructor() {
    super();
    this.timeout;
    this.timeoutDuration=30

  }
  componentDidMount() {
    window.onmousemove =()=>{
      this.setTimer()
    }
    window.onscroll =()=>{
      this.setTimer()
    }
    window.onclick =()=>{
      this.setTimer()
    }
    this.setTimer()
  }

  setTimer() {
    console.log('settimer')
    if (this.timeout) {
      clearTimeout(this.timeout); //cancel the previous timer.
      this.timeout = null;
    }
    this.timeout = setTimeout(() => {
      window.location.reload()
    }
      , this.timeoutDuration*1000)
  }

  render() {
    return (
      <React.Fragment></React.Fragment>
    )

  }
}
class App extends Component {
  componentDidMount() {
    window.onbeforeunload = function () { window.scrollTo(0, 0); }
  }
  render() {
    return (

      <div>
        <RefreshTimer ></RefreshTimer>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={Process} />
          <Route exact path='/reading-list' component={Linklist} />
          <Route path='*' exact={true} component={ErrorPage} />

        </Switch>
      </div>
    );
  }
}

export default CSSModules(App, styles);
