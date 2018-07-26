import CSSModules from 'react-css-modules';
import React from 'react';
import styles from './SpacesHeadline.scss'
import { Spring } from 'react-spring'
import Waypoint from 'react-waypoint';


class SpacesHeadline extends React.Component {
	constructor(props) {
		super(props)
		this.items = [
			{
				title: 'Julius',
				dot: '#007AFF'
			},
			{
				title: 'Work',
				dot: '#4CD964'
			},
			{
				title: 'Shopping',
				dot: '#FFCC00'
			},
			{
				title: 'Thailand',
				dot: '#FF2D55'
			},
			{
				title: 'everything'
			},
		].reverse()

		this.state = {
			progress: 0,
			visible: false
		}
		this.onChangeVisibility = this.onChangeVisibility.bind(this)
	}

	onChangeVisibility() {
		if (!this.state.visible) {
			this.setState({
				visible: true
			})
			this.startAnimation()
		}

	}

	startAnimation() {
		let progress = 0
		progress++;

		this.setState({
			progress: progress
		})
		const interval = setInterval(() => {
			progress++;

			this.setState({
				progress: progress
			})
			if (progress === this.items.length - 1) {
				clearInterval(interval)
			}
		}, 800)
	}

	render() {
		const { progress } = this.state;
		const previous = progress === 0 ? 0 : progress - 1
		return (
			<Waypoint onEnter={this.onChangeVisibility}>
				<h2 styleName="container">
					<div>A Space for </div>
					<div styleName="slider-container">
						<div styleName="cropper">
							<Spring config={{ tension: 80, friction: 7 }} from={{ progress: previous }} to={{ progress }}>
								{animation =>
									<div style={{ transform: `translateY(${animation.progress * (100 / this.items.length)}%)` }} className={styles['item-container']}>
										{this.items.map((item, index) =>
											<div key={index} className={styles.item}>
												{item.dot && <div style={{ backgroundColor: item.dot }} className={styles.dot} />}
												{item.title}
											</div>)}
									</div>
								}
							</Spring>

						</div>
					</div>
				</h2>
			</Waypoint>
		);
	}
}

export default CSSModules(SpacesHeadline, styles);
