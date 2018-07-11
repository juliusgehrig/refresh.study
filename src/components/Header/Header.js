import CSSModules from 'react-css-modules';
import React, {Component}  from 'react';
import styles from './Header.scss'
import {NavLink,withRouter} from 'react-router-dom'

import Wrapper from 'components/Wrapper'


class Header  extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
	  return (
			<div styleName="container">
				<Wrapper>
					<nav styleName="nav">
						<h1 styleName="logo">Refresh</h1>
						<div styleName="links">
							<NavLink exact className={styles.navLink} activeClassName={styles.navLinkActive} to="/">Overview</NavLink>
							<NavLink exact className={styles.navLink} activeClassName={styles.navLinkActive} to="/process">Process</NavLink>
						</div>
					</nav>
				</Wrapper>
			</div>
		);
	}
  }

export default withRouter(CSSModules(Header, styles));