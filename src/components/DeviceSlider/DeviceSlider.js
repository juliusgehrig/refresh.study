import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import styles from './DeviceSlider.scss'
import ReactSwipe from 'react-swipe';
import DeviceFrame from 'components/DeviceFrame';


const Tab = CSSModules((props) => (
	<div onClick={props.onClick}>
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

		this.handlePaginationClick = this.handlePaginationClick.bind(this)
	}

	handlePaginationClick(index) {
		this.carousel.slide(index)
	}

	render() {
		const { items } = this.props

		return (
			<div styleName="container">
				<DeviceFrame>
					<ReactSwipe ref={(c) => { this.carousel = c }} >
						{items.map((item, key) => <div key={key}>{item.element}</div>)}
					</ReactSwipe>
				</DeviceFrame>
				<div styleName="pagination">

					{items.map((item, key) => <Tab onClick={() => { this.handlePaginationClick(key) }} title={item.title} description={item.description} />)}
				</div>
			</div>);
	}
}

export default CSSModules(DeviceSlider, styles);