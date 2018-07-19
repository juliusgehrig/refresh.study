import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import styles from './SpacesHeadline.scss'
import { Spring } from 'react-spring'


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
			progress: 0
		}


	}

	componentDidMount() {
		let progress = 0

		const interval = setInterval(() => {
			progress++;

			this.setState({
				progress: progress
			})
			if (progress == this.items.length - 1) {
				clearInterval(interval)
			}
		}, 700)
	}
	render() {
		const { progress } = this.state;
		const previous = progress == 0 ? 0 : progress - 1
		return (<h2 styleName="container">
			<div>A space for </div>
			<div styleName="slider-container">
				<div styleName="cropper">
					<Spring config={{ tension: 80, friction: 7 }} from={{ progress: previous }} to={{ progress }}>
						{animation =>
							<div style={{ transform: `translateY(${animation.progress * (100 / this.items.length)}%)` }} className={styles['item-container']}>
								{this.items.map((item,index) =>
									<div className={styles.item}>
										{item.dot && <div style={{ backgroundColor: item.dot }} className={styles.dot } />}
										{item.title}
									</div>)}
							</div>
						}
					</Spring>

				</div>
			</div>
		</h2>);
	}
}

export default CSSModules(SpacesHeadline, styles);