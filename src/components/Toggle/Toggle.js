import CSSModules from 'react-css-modules';
import React, {Component}  from 'react';
import styles from './Toggle.scss'



class Toggle  extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			enabled: true
		}
		this.onToggle = this.onToggle.bind(this)
	}

	onToggle(){
		this.props.onSwitch(!this.props.enabled)

	}

	render() {
		const {enabled} = this.props
	  return (
			<div onClick={this.onToggle} styleName={`container${ enabled ? '-active' : '' }`}>
				<div styleName="active-background"></div>
				<div styleName="toggle"></div>
			</div>
		);
	}
  }

export default CSSModules(Toggle, styles);