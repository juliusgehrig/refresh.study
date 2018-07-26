import CSSModules from 'react-css-modules';
import React from 'react';
import styles from './TabControl.scss'
import { Spring, animated, interpolate } from 'react-spring'



class TabControl extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentIndex: false
		}

		this.items = []
	}

	componentDidMount() {
		this.setState({
			currentIndex: 0
		})
	}

	selectItem(index) {
		this.setState({
			currentIndex: index
		})
		console.log(index)
		this.props.onSelect(index)
	}
	getSliderOffset() {
		const { currentIndex } = this.state
		const offset = this.items[currentIndex].offsetLeft
		return offset
	}
	render() {
		const { items } = this.props
		const { currentIndex } = this.state
		const _this = this
		return (
			<div styleName="scroll">
				<div styleName="container" style={{width:'380px'}}>
					{items.map((item, index) =>
						<div onClick={() => { this.selectItem(index) }} key={index} ref={c => { _this.items[index] = c }} styleName={`item${index === currentIndex ? '-active' : ''}`}>
							{item}
						</div>
					)}
					{currentIndex !== false &&
						<Spring native config={{ tension: 80, friction: 7 }} to={{ x: this.getSliderOffset(), width: this.items[currentIndex].offsetWidth }}>
							{({ x, width }) => <animated.div style={{
								width: width,
								transform: interpolate([x], x => `translateX(${x}px)`)
							}} className={styles.slider}></animated.div>}
						</Spring>
					}

				</div>
			</div>
		);
	}
}

TabControl.defaultProps = {
	onSelect: (index) => { }
}

export default CSSModules(TabControl, styles);

