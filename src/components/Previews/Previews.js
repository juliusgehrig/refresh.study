import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import styles from './Previews.scss'
import { Spring,animated, interpolate } from 'react-spring'



class Previews extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentIndex: props.current
		}

		this.items = [
			'/assets/images/placeholder/preview-video.svg',
			'/assets/images/placeholder/preview-article.svg',
			'/assets/images/placeholder/preview-video.svg',
			'/assets/images/placeholder/preview-article.svg'
		]

		this.changeIndex = this.changeIndex.bind(this)
	}


	componentWillReceiveProps(props, oldProps) {
		if (this.props.current != props.current) {
			this.setState({
				currentIndex: props.current
			})
		}
	}
	changeIndex() {
		this.setState({
			currentIndex: this.state.currentIndex + 1
		})
	}
	render() {
		const { currentIndex } = this.state
		return (
			<div onClick={this.changeIndex} styleName='container'>
				{this.items.map((item, index) =>
					<div key={index}  >
						<Spring native config={{tension:40 }} to={{  y: (5*index - currentIndex), scale: 1 - (0.05 *(index - currentIndex)),  opacity: index - currentIndex < 0 ? 0 : 1 - (0.3 * (index - currentIndex)) }}>
							{({opacity,y,scale}) =>
								<animated.div style={{ 
									opacity: opacity, 
									transform: interpolate([y,scale],(y,scale) => `translateY(${y}%) scale(${scale})`),
									 zIndex: 99 - index 
									 }} className={styles.item}>
									<img src={item} alt="" />
								</animated.div>
							}
						</Spring>
					</div>
				)}
			</div>
		);
	}
}

export default CSSModules(Previews, styles);