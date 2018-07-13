import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import styles from './RevealText.scss'

import VisibilitySensor from 'react-visibility-sensor';


class RevealText extends Component {

	constructor(props) {
		super(props);
		this.textFragments = props.text.split(' ');
		this.state = {
			revealed: false
		}

		this.onChangeVisibility = this.onChangeVisibility.bind(this)
	}

	onChangeVisibility(visibility) {
		if (this.state.revealed === false && visibility) {
			this.setState({
				revealed: true
			})
		}
	}



	render() {
		const { revealed } = this.state;
		return (
			<React.Fragment>
				<VisibilitySensor onChange={this.onChangeVisibility} />
				{this.textFragments.map((fragment, index) =>
					<React.Fragment key={index} >
						<span styleName={`fragment${revealed === true ? '-revealed' : ''}`}  style={{ transitionDelay: `${index * 0.1}s` }}>{fragment + ' '}</span>  {' '}
					</React.Fragment>)}
			</React.Fragment>
		)
	}
}



export default CSSModules(RevealText, styles);