import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import styles from './Hero.scss'
import RevealText from 'components/RevealText'


class Hero extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videoVisible: false
		}
		this.showVideo = this.showVideo.bind(this)
		this.hideVideo = this.hideVideo.bind(this)
	}

	showVideo() {
		this.setState({
			videoVisible: true
		})
	}
	hideVideo() {
		this.setState({
			videoVisible: false
		})
	}
	render() {
		return (
			<div styleName="banner">

				<video preload="metadata" playsInline autoPlay loop muted  >
					<source src="/assets/videos/header-background.mp4" type="video/mp4" />
					Your browser does not support the video tag.
			</video>
				<div styleName="banner-box">
					<h1>
						<RevealText text="Refresh"></RevealText>
					</h1>
					<p styleName="introtext">
						<RevealText text="A fresh approach to the web browser"></RevealText>
					</p>
					<a onClick={this.showVideo} styleName="button">
						Watch the video <span styleName="play-icon">▶</span>
					</a>
				</div>
				{this.state.videoVisible &&
					<div onClick={this.hideVideo}  styleName="background-overlay">
						<div styleName="video-overlay">
							<div styleName="responsive-video">
								<iframe src="https://www.youtube.com/embed/Fcke6xaHzOg?rel=0&amp;showinfo=0;autoplay=1;controls=false" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
							</div>
						</div>
					</div>
				}

			</div>)
	}
}


export default CSSModules(Hero, styles);
