import CSSModules from 'react-css-modules';
import React from 'react';
import styles from './Hero.scss'
import RevealText from 'components/RevealText'



const Hero = (props) => (
	<div styleName="banner">
<<<<<<< HEAD
		<video preload="metadata" playsInline autoPlay loop muted  >
  		<source src="/assets/videos/header-background_3.mp4" type="video/mp4"/>
=======
		<video preload="metadata" playsInline loop muted autoPlay poster="/assets/images/video-cover.png">
  		<source src="/assets/videos/placeholder/test3.mp4" type="video/mp4"/>
>>>>>>> 38aa1788c5af9b72fa85a202ab39a6d31682f767
			Your browser does not support the video tag.
		</video>
		<div styleName="banner-box">
			<h1>
				<RevealText text="Refresh"></RevealText>
			</h1>
			<p styleName="introtext">
				<RevealText text="A fresh approach to the web browser"></RevealText>
			</p>
			<button>
				Watch the video <span styleName="play-icon">▶</span>
			</button>
		</div>
	</div>
);

export default CSSModules(Hero, styles);
