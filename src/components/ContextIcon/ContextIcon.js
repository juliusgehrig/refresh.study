import CSSModules from 'react-css-modules';
import React, {Component}  from 'react';
import styles from './ContextIcon.scss'



class ContextIcon  extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
	  return (
			<svg width="75px" height="75px" viewBox="0 0 75 75" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
			    <defs>
			        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
			            <stop stop-color="#FFFFFF" offset="0%"></stop>
			            <stop stop-color="#FFFFFF" stop-opacity="0.260275136" offset="100%"></stop>
			        </linearGradient>
			    </defs>
			    <g id="context_icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			        <circle styleName="base" fill="#242424" fill-rule="nonzero" cx="37.5" cy="37.5" r="37.5"></circle>
			        <rect styleName="inner" fill="url(#linearGradient-1)" fill-rule="nonzero" opacity="0.4" x="26.25" y="26.25" width="23.5" height="23.5" rx="1"></rect>
			        <rect styleName="outer" stroke="#FFFFFF" stroke-width="3" fill-rule="nonzero" x="21.5" y="21.5" width="33" height="33" rx="3"></rect>
			    </g>
			</svg>

		);
	}
  }

export default CSSModules(ContextIcon, styles);
