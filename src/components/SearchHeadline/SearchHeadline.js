import CSSModules from 'react-css-modules';
import React from 'react';
import styles from './SearchHeadline.scss'
import { Spring } from 'react-spring'
import Waypoint  from 'react-waypoint';
import Typist from 'react-typist';



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
		this.typingDone = this.typingDone.bind(this)

	}

	getTag() {
		return (
			<div key={0} styleName='tagContainer'>
				<Spring config={{ tension: 80, friction: 7 }} from={{ scale: 0 }} to={{ scale: 1 }} >{animation => <div style={{ transform: `scale(${1.5 - animation.scale / 2})`, opacity: animation.scale }} className={styles.tag}>Tag</div>}</Spring>
			</div>
		)
	}
	
	type() {
		for(let i = 0; i<=this.text.length;i++){
			setTimeout(()=>{
				 this.setState({
					written: this.text.slice(0, i)
				})
			},(i+1)*50)
		}
	}

	typingDone(){
		this.setState({
			done:true
		})
	}

	onChangeVisibility() {
		if (!this.state.visible) {
			this.setState({
				visible: true
			})
		}
	}


	render() {
		return (
			<Waypoint onEnter={this.onChangeVisibility}>
				<h2 styleName="headline">{this.state.visible  ? <Typist cursor={{show:false}} onTypingDone={this.typingDone}>Find it with a &nbsp; </Typist> :  <div style={{ opacity: 0 }}>a</div>} {this.state.done && this.getTag()}</h2>
			{/*	<h2 styleName="headline">{this.state.written.length === 0 ? <div style={{ opacity: 0 }}>a</div> : null}{this.state.written}</h2>*/}
			</Waypoint>
		);
	}
}

export default CSSModules(SearchHeadline, styles);