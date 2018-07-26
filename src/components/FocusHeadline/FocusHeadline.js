import CSSModules from 'react-css-modules';
import React from 'react';
import styles from './FocusHeadline.scss'
import Waypoint  from 'react-waypoint';



class FocusHeadline extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			visible: false
		}
		this.onChangeVisibility = this.onChangeVisibility.bind(this)
	}

	onChangeVisibility() {
		if (!this.state.visible) {
			this.setState({
				visible: true
			})
		}
	}

	render() {
		const { visible } = this.state
		return (
			<Waypoint onEnter={this.onChangeVisibility} >
				<h1 styleName="section-headline" >Focus on whats <span styleName={`headline${visible ? '-focus' : ''}`}>important</span></h1>
			</Waypoint>
		);
	}
}

export default CSSModules(FocusHeadline, styles);
