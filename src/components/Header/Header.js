import CSSModules from 'react-css-modules';
import React from 'react';
import styles from './Header.scss'
import { NavLink, withRouter } from 'react-router-dom'

import Wrapper from 'components/Wrapper'
import {Link} from 'react-router-dom'


class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			barWidth: 0,
			barOffset: 0
		}
		this.routes = [
			{
				path: '/',
				title: 'Overview'
			},
			{
				path: '/process',
				title: 'About'
			}
		]
		this.linkRefs = []
	}
	componentDidMount() {
		const _this = this

		this.updateBar(this.props.location.pathname)

		this.props.history.listen((location, action) => {
			console.log(location)
			_this.updateBar(location.pathname)
		});


	}

	getBarWidth(pathname) {
		for (let i = 0; i < this.routes.length; i++) {
			if (this.routes[i].path === pathname) {
				return this.routes[i].ref.offsetWidth;
			}
		}
	}

	updateBar(pathname) {
		this.setState({
			barWidth: this.getBarWidth(pathname),
			barOffset: this.getBarOffset(pathname),
		})
	}

	getBarOffset(pathname) {
		for (let i = 0; i < this.routes.length; i++) {

			if (this.routes[i].path === pathname) {
				return this.routes[i].ref.offsetLeft;
			}
		}
	}


	render() {
		const { barWidth, barOffset } = this.state
		return (
			<div styleName="container">
				<Wrapper>
					<div className="row center-xs">
						<div className="col-xs-11">
							<div className="box">
								<nav styleName="nav">
									<Link styleName="logoLink" to="/"><h1 styleName="logo">Refresh</h1></Link>
									<div styleName="links">
										{this.routes.map((route, index) =>
											<div key={index} styleName='linkContainer' ref={(c) => { this.routes[index].ref = c }}>
												<NavLink  key={index} exact className={styles.navLink} activeClassName={styles.navLinkActive} to={route.path}>{route.title}</NavLink>
											</div>
										)}
										<div styleName="bar" style={{ width: `${barWidth}px`, left: `${barOffset}px` }}></div>
									</div>
								</nav>
							</div>
						</div>
					</div>
				</Wrapper>
			</div>
		);
	}
}

export default withRouter(CSSModules(Header, styles));
