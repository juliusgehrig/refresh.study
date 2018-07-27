import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import styles from './CookieBanner.scss'



class CookieBanner extends React.Component {
	constructor(props) {
		super(props)

		const cookie = this.getCookie('refresh-cookies')
		this.state = {
			visible: cookie == 'allow' ? false : true
		}

		this.onAccept = this.onAccept.bind(this)
	}
	setCookie(name, value, days) {
		var expires = "";
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + "=" + (value || "") + expires + "; path=/";
	}
	getCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	}
	eraseCookie(name) {
		document.cookie = name + '=; Max-Age=-99999999;';
	}

	onAccept(){
		this.setCookie('refresh-cookies','allow',30);
		this.setState({
			visible:false
		})

	}
	render() {
		return this.state.visible && (
			<div styleName="base">
				<p>We use cookies on this page for analytics</p>
				<a styleName="cookiebutton" onClick={this.onAccept}>Okay</a>
			</div>
		) || null;
	}
}

export default CSSModules(CookieBanner, styles);
