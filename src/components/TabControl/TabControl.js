import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import styles from './TabControl.scss'
import { Spring } from 'react-spring'



class TabControl extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			currentIndex: false
		}

		this.items = []
	}

	componentDidMount() {
		this.setState({
			currentIndex: 0
		})
	}

	selectItem(index){
		this.setState({
			currentIndex: index
		})
		console.log(index)
		this.props.onSelect(index)
	}
	getSliderOffset(){
		const { currentIndex } = this.state
		const offset = this.items[currentIndex].offsetLeft
		return offset + 'px'
	}
	render() {
		const { items } = this.props
		const { currentIndex } = this.state
		const _this = this
		return (
			<div styleName="container">
				{items.map((item, index) =>
					<div onClick={()=>{this.selectItem(index)}} key={index} ref={c => { _this.items[index] = c }} styleName={`item${index == currentIndex ? '-active' : ''}`}>
						{item}
					</div>
				)}
				{currentIndex !== false &&
					<Spring config={{ tension: 80, friction: 7 }} from={{left:this.getSliderOffset() , width: this.items[currentIndex].offsetWidth }} to={{left:this.getSliderOffset(), width: this.items[currentIndex].offsetWidth }}>
						{animation => <div style={animation} className={styles.slider}></div>}
					</Spring>
				}

			</div>
		);
	}
}

TabControl.defaultProps = {
	onSelect : (index) =>{}
}

export default CSSModules(TabControl, styles);