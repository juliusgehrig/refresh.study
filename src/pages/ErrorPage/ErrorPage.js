import CSSModules from 'react-css-modules';
import React from 'react';
import styles from '../../components/Hero/Hero.scss'
import {Link} from 'react-router-dom'


const ErrorPage = (props) => (
	<div styleName="banner" style={{maxHeight:'auto'}}>

		<video preload="metadata" playsInline autoPlay loop muted  >
			<source src="/assets/videos/header-background.mp4" type="video/mp4" />
			Your browser does not support the video tag.
			</video>
		<div styleName="banner-box">
			<h1>
				404
			</h1>
			<p styleName="introtext">
						This page doesn't exist.
					</p>
			<a  href="/"  styleName="button">
				Go back
			</a>
		</div>
	</div>
);


export default CSSModules(ErrorPage, styles);