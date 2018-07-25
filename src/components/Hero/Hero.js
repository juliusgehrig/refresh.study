import CSSModules from 'react-css-modules';
import React from 'react';
import styles from './Hero.scss'
import Wrapper from 'components/Wrapper'


const Hero = (props) => (
	<div styleName="banner">
		<video preload="metadata" playsInline loop muted autoPlay poster="/assets/images/video-cover.png">
  		<source src="/assets/videos/placeholder/test2.mp4" type="video/mp4"/>
			Your browser does not support the video tag.
		</video>
		<div styleName="banner-box">
			<h1>Refresh</h1>
			<p styleName="introtext">
				A concept for a fresh approach to the web browser
			</p>
			<button>
				Watch the video
			</button>
		</div>
	</div>
);

export default CSSModules(Hero, styles);
