import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import styles from './DeviceSlider.scss'
import ReactSwipe from 'react-swipe';
import DeviceFrame from 'components/DeviceFrame';


const Tab = CSSModules((props) => (
	<div styleName={`tab${props.current ? '-current' : ''}`} onClick={props.onClick}>
		<div styleName="progressBar">
			<div styleName="progress" style={{ width: `${ props.progress * 100 }% ` }}>
			</div>
		</div>
		<div styleName='title'>
			{props.title}
		</div>
		<div styleName='description'>
			{props.description}
		</div>
	</div>
), styles)

class DeviceSlider extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			currentSlide:0
		}
		this.handlePaginationClick = this.handlePaginationClick.bind(this)
		this.onSlideChange = this.onSlideChange.bind(this)
	}

	handlePaginationClick(index) {
		this.carousel.slide(index)
	}

	onSlideChange(index) {
		this.setState({
			currentSlide:index
		})
	}
	render() {
		const { items } = this.props

		return (
			<div styleName="container">
				<DeviceFrame>
					<ReactSwipe swipeOptions={{ callback: this.onSlideChange }} ref={(c) => { this.carousel = c }} >
						{items.map((item, key) => <div key={key}>{item.element}</div>)}
					</ReactSwipe>
				</DeviceFrame>
				<div styleName="pagination">

					{items.map((item, key) => <Tab current={key == this.state.currentSlide} onClick={() => { this.handlePaginationClick(key) }} title={item.title} description={item.description} />)}
				</div>
			</div>);
	}
}

export default CSSModules(DeviceSlider, styles);