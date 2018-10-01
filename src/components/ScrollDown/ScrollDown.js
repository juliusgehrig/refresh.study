import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import styles from './ScrollDown.scss'



class ScrollDown extends React.Component {


	render() {
		return (
			<div styleName="container">
			<svg width="25px" height="100%" viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg" styles="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
				<path styleName="wheel" d="M123.359,79.775l0,72.843"fill="none" stroke="white" stroke-width="20" stroke-linecap="round" />
				<path fill="none" stroke="white" stroke-width="20" id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" styles="fill:none;stroke:#fff;stroke-width:20px;" />
			</svg>
			<p styleName="text">Scroll down</p>
			</div>
		);
	}
}

export default CSSModules(ScrollDown, styles);
