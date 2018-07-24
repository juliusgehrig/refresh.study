import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import styles from './FocusHeadline.scss'
import VisibilitySensor from 'react-visibility-sensor';



class FocusHeadline extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			visible: false
		}
		this.onChangeVisibility = this.onChangeVisibility.bind(this)
	}

	onChangeVisibility(visible) {
		console.log(visible)
		if (!this.state.visible && visible) {
			this.setState({
				visible: true
			})
		}
	}

	render() {
		const { visible } = this.state
		return (
			<VisibilitySensor delayedCall={true} onChange={this.onChangeVisibility} >
				<h1 styleName="section-headline" >Focus on whats <span styleName={`headline${visible ? '-focus' : ''}`}>important</span></h1>
			</VisibilitySensor>
		);
	}
}

export default CSSModules(FocusHeadline, styles);
