import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import styles from './DeviceSlider.scss'
import Carousel from 'nuka-carousel';

import DeviceFrame from 'components/DeviceFrame';


class DeviceSlider extends React.Component {
	constructor(props) {
		super(props)
		this.handlePaginationClick = this.handlePaginationClick.bind(this)
	}

	handlePaginationClick(index) {
		this.carousel.goToSlide(index)
	}

	render() {
		const { items } = this.props
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};

		return (
			<div styleName="container">
				<DeviceFrame>
					<Carousel ref={(c) => { this.carousel = c }}>
						{items.map((item, key) => <div key={key}>{item.element}</div>)}
					</Carousel>
				</DeviceFrame>
				<div styleName="pagination">
					{items.map((item, key) => <div onClick={() => { this.handlePaginationClick(key) }} key={key}>{item.title}, {item.description}</div>)}
				</div>
			</div>);
	}
}

export default CSSModules(DeviceSlider, styles);