import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import styles from './SearchHeadline.scss'
import { Spring } from 'react-spring'
import VisibilitySensor from 'react-visibility-sensor';



class SearchHeadline extends React.Component {
	constructor(props) {
		super(props)
		this.text = 'Find it with a '.split('')
		this.text.push(this.getTag());
		this.state = {
			written: [],
			visible: false

		}

		this.onChangeVisibility = this.onChangeVisibility.bind(this)

	}

	getTag() {
		return (
			<div styleName='tagContainer'>
				<Spring config={{ tension: 80, friction: 7 }} from={{ scale: 0 }} to={{ scale: 1 }} >{animation => <div style={{ transform: `scale(${1.5 - animation.scale / 2})`, opacity: animation.scale }} className={styles.tag}>Tag</div>}</Spring>
			</div>
		)
	}

	type() {
		setTimeout(() => {
			if (this.state.written.length < this.text.length) {
				this.setState({
					written: this.text.slice(0, this.state.written.length + 1)
				})

				this.type()
			}
		}, Math.random() * (50 - 40) + 40)
	}

	onChangeVisibility(visible) {
		console.log(visible)
		if (!this.state.visible && visible) {
			this.setState({
				visible: true
			})
			this.type()
		}

	}


	render() {
		return (
			<VisibilitySensor delayedCall={true} onChange={this.onChangeVisibility} >
				<h2>{this.state.written.length == 0 ? <div style={{ opacity: 0 }}>a</div> : null}{this.state.written}</h2>
			</VisibilitySensor>
		);
	}
}

export default CSSModules(SearchHeadline, styles);