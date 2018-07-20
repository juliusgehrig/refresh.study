import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import styles from './Previews.scss'
import { Spring } from 'react-spring'



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
						<Spring config={{tension:40 }}from={{ offset: index - currentIndex, opacity: index - currentIndex < 0 ? 0 : 1 }} to={{ offset: index - currentIndex,translateY: index - currentIndex, opacity: index - currentIndex < 0 ? 0 : 1 - (0.3 * (index - currentIndex)) }}>
							{animation =>
								<div style={{ opacity: animation.opacity, transform: `translateY(${5 * animation.offset}%) scale(${1 - (0.05 * animation.offset)})`, zIndex: 99 - index }} className={styles.item}>
									<img src={item} alt="" />
								</div>
							}
						</Spring>
					</div>
				)}
			</div>
		);
	}
}

export default CSSModules(Previews, styles);