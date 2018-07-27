import CSSModules from 'react-css-modules';
import React from 'react';
import styles from './Previews.scss'
import { Spring,animated, interpolate, config } from 'react-spring'



class Previews extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentIndex: props.current
		}

		this.items = [
			'/assets/images/previews/preview-product.png',
			'/assets/images/previews/preview-article.png',
			'/assets/images/previews/preview-video.png',
			'/assets/images/previews/preview-event.png'
		]

		this.changeIndex = this.changeIndex.bind(this)
	}


	componentWillReceiveProps(props, oldProps) {
		if (this.props.current !== props.current) {
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
						<Spring native config={config.slow} to={{  y: (5*index - currentIndex), scale: 1 - (0.05 *(index - currentIndex)),  opacity: index - currentIndex < 0 ? 0 : 1 - (0.3 * (index - currentIndex)) }}>
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
