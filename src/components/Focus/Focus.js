import CSSModules from 'react-css-modules';
import React from 'react';
import styles from './Focus.scss'
import { Spring, animated, interpolate } from 'react-spring'



class Focus extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			focusEnabled: true,
			currentIndex: props.current
		}
		this.items = [{
			default: '/assets/images/placeholder/music-focus-off.png',
			focus: '/assets/images/placeholder/music-focus.png'
		}, {
			default: '/assets/images/placeholder/reader-focus-off.png',
			focus: '/assets/images/placeholder/reader-focus.png'
		}, {
			default: '/assets/images/placeholder/reader-focus-off.png',
			focus: '/assets/images/placeholder/form-focus.png'
		}]

	}

	componentWillReceiveProps(props, oldProps) {
		if (this.props.current !== props.current) {
			this.setState({
				currentIndex: props.current
			})
		}
		if (this.props.enabled !== props.enabled) {
			this.setState({
				focusEnabled: props.enabled
			})
		}
	}


	render() {
		const { focusEnabled, currentIndex } = this.state
		return (
			<div styleName="container" >
				{this.items.map((item, index) =>
					<Spring native key={index} config={{ tension: 20, friction: 8 }}  to={{ opacity: index - currentIndex === 0 ? 1 : 0, translateX: (index - currentIndex) * 50, rotate: focusEnabled ? 180 : 0 }} to={{ opacity: index - currentIndex === 0 ? 1 : 0, translateX: (index - currentIndex) * 50, rotate: focusEnabled ? 180 : 0 }}>
						{({rotate, translateX, opacity}) =>
							<animated.div style={{
								opacity: opacity,
								transform: interpolate([translateX], translateX => `translateX(${translateX}%)`)
							}} className={styles.itemContainer}>
								<animated.div style={{
									transform:  interpolate([rotate], rotate =>`rotateY(${rotate}deg)`)
									 }} className={styles.flipper}>
									<div className={styles.front}>
										<img src={item.default} alt="" />
									</div>
									<div className={styles.back}>
										<img src={item.focus} alt="" />
									</div>
								</animated.div>
							</animated.div>
						}
					</Spring>
				)}
			</div>);
	}
}

export default CSSModules(Focus, styles);
