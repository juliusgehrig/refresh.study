import CSSModules from 'react-css-modules';
import React, {Component}  from 'react';
import styles from './TabsIcon.scss'


class TabsIcon  extends React.Component {
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
			    <g id="tabs_icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			        <circle id="Base" fill="#242424" fill-rule="nonzero" cx="37.5" cy="37.5" r="37.5"></circle>
			        <rect styleName="tab_inactive_1" fill="url(#linearGradient-1)" fill-rule="nonzero" opacity="0.4" x="30" y="22" width="24" height="24" rx="3"></rect>
			        <rect styleName="tab_inactive_2" fill="url(#linearGradient-1)" fill-rule="nonzero" opacity="0.4" x="22" y="30" width="24" height="24" rx="3"></rect>
			        <rect styleName="tab_active" fill="#FFFFFF" fill-rule="nonzero" x="22" y="30" width="24" height="24" rx="3"></rect>
			    </g>
			</svg>
		);
	}
  }

export default CSSModules(TabsIcon, styles);
