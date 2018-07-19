import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import styles from './SearchHeadline.scss'
import { Spring } from 'react-spring'



class SearchHeadline extends React.Component {
	constructor(props) {
		super(props)
		this.text = 'Find it with a '.split('')
		this.text.push(this.getTag());
		this.state = {
			written: []
		}

	}

	getTag() {
		return (
			<div styleName='tagContainer'>
				<Spring config={{ tension: 80, friction: 7 }} from={{ scale: 0 }} to={{ scale: 1 }} >{animation => <div style={{ transform: `scale(${ 1.5 - animation.scale/2})`, opacity: animation.scale }} className={styles.tag}>Tag</div>}</Spring>
			</div>
		)
	}
	componentDidMount() {
		this.type()
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


	render() {
		return (<h2>{this.state.written}</h2>);
	}
}

export default CSSModules(SearchHeadline, styles);