import CSSModules from 'react-css-modules';
import React  from 'react';
import styles from './Focus.scss'
import { Spring } from 'react-spring'



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
			default: '/assets/images/placeholder/music-focus-off.png',
			focus: '/assets/images/placeholder/reader-focus.png'
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
					<Spring key={index} config={{ tension: 20, friction: 8 }} to={{ opacity: index - currentIndex === 0 ? 1 : 0, translateX: (index - currentIndex) * 50, rotate: focusEnabled ? 180 : 0 }}>
						{animation =>
							<div style={{ opacity: animation.opacity, transform: `translateX(${animation.translateX}%)` }} className={styles.itemContainer}>
								<div style={{ transform: `rotateY(${animation.rotate}deg)` }} className={styles.flipper}>
									<div className={styles.front}>
										<img src={item.default} alt="" />
									</div>
									<div className={styles.back}>
										<img src={item.focus} alt="" />
									</div>
								</div>
							</div>
						}

					</Spring>
				)}
			</div>);
	}
}

export default CSSModules(Focus, styles);