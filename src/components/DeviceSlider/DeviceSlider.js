import CSSModules from 'react-css-modules';
import React from 'react';
import styles from './DeviceSlider.scss'
import ReactSwipe from 'react-swipe';
import DeviceFrame from 'components/DeviceFrame';
import { Player, ControlBar } from 'video-react';


const Tab = CSSModules((props) => (
	<div styleName={`tab${props.current ? '-current' : ''}`} onClick={props.onClick}>
		<div styleName="progressBar">
			<div styleName="progress" style={{ width: `${props.progress * 100}% ` }}>
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
		this.state = {
			currentSlide: 0,
			progress: []
		}

		this.items = this.props.items



		this.handlePaginationClick = this.handlePaginationClick.bind(this)
		this.onSlideChange = this.onSlideChange.bind(this)
		this.handleStateChange = this.handleStateChange.bind(this)
	}

	handlePaginationClick(index) {

		if (index === this.state.currentSlide) {
			if (this.items[index].player) {
				alert('ok')
				this.items[index].player.seek(0);
				this.items[index].player.play();
			}
			this.setState({
				progress: this.getProgress(true)
			})

		} else {
			this.carousel.slide(index)
		}

	}

	getProgress(reset = false) {
		if (reset) {
			this.items.forEach(item => { item.progress = 0 });
		}
		return this.items.map(item => item.progress);
	}

	componentDidMount() {
		this.onSlideChange(0)

		this.items.forEach((item, index) => {
			item.progress = 0
			if (item.type === 'video') {
				item.player.subscribeToStateChange((state, prevState) => { this.handleStateChange(state, prevState, index) });

			}
		})

		this.setState({ progress: this.getProgress() })
	}



	handleStateChange(state, prevState, index) {
		if (index !== this.state.currentSlide) return;

		if (state.duration) {
			this.items[index].progress = state.currentTime / state.duration
			this.setState({ progress: this.getProgress() })
		}
		if (state.paused === true && prevState.paused === false) {
			this.carousel.next()
		}
	}

	onSlideChange(index) {
		clearInterval(this.interval)

		this.setState({
			currentSlide: index,
			progress: this.getProgress(true)
		})

		if (this.items[index].type === 'video') {
			this.items[index].player.seek(0);
			this.items[index].player.play();
		} else {

			const duration = 8;
			let i = 0;
			this.interval = setInterval(() => {
				this.items[index].progress = (i * 0.25) / duration;
				this.setState({
					progress: this.getProgress()
				})

				if ((i * 250) / 1000 >= duration) {
					clearInterval(this.interval);
					this.carousel.next()
				}
				i++;
			}, 250)
		}

	}
	render() {
		const { items } = this.props

		return (
			<div styleName="container">
				<DeviceFrame>
					<ReactSwipe swipeOptions={{ callback: this.onSlideChange, speed: 800 }} ref={(c) => { this.carousel = c }} >

						{items.map((item, key) =>
							<div key={key}>
								{
									item.type === 'video' ?
										<Player controls={false} preload="metadata" ref={(c) => { this.items[key].player = c }}>
											<source src={item.src} />
											<ControlBar disableCompletely={true} />

										</Player>
										:
										<img src={item.src} alt="" />
								}

							</div>

						)}
					</ReactSwipe>
				</DeviceFrame>
				<div styleName="pagination">
					{items.map((item, key) => <Tab key={key} progress={this.state.progress[key]} current={key === this.state.currentSlide} onClick={() => { this.handlePaginationClick(key) }} title={item.title} description={item.description} />)}
				</div>
			</div>);
	}
}

export default CSSModules(DeviceSlider, styles);