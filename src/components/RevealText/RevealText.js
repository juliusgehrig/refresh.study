import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import styles from './RevealText.scss'
import Waypoint from 'react-waypoint';

class RevealText extends Component {

	constructor(props) {
		super(props);
		this.textFragments = props.text.split(' ');
		this.state = {
			revealed: false
		}

		this.onChangeVisibility = this.onChangeVisibility.bind(this)
	}

	onChangeVisibility() {
		if (this.state.revealed === false) {
			this.setState({
				revealed: true
			})
		}
	}



	render() {
		const { revealed } = this.state;
		return (
			<Waypoint onEnter={this.onChangeVisibility}>
				<span>
					<React.Fragment >
						{this.textFragments.map((fragment, index) =>
							<React.Fragment key={index} >
								<span styleName={`fragment${revealed === true ? '-revealed' : ''}`} style={{ transitionDelay: `${0.2 + index * 0.12}s` }}>{fragment + ' '}</span>  {' '}

							</React.Fragment>)}
					</React.Fragment>
				</span>
			</Waypoint>
		)
	}
}



export default CSSModules(RevealText, styles);
