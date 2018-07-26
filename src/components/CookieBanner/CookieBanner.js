import CSSModules from 'react-css-modules';
import React, {Component}  from 'react';
import styles from './CookieBanner.scss'



class CookieBanner  extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			visible: true
		}
	}
	render() {
	  return this.state.visible &&(
			<div styleName="base">
				<p>We use cookies on this page for analytics</p>
				<a styleName="cookiebutton" onClick={()=>{this.setState({visible:false})} }>Okay</a>
			</div>
		) || null;
	}
  }

export default CSSModules(CookieBanner, styles);
