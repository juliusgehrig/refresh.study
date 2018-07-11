import CSSModules from 'react-css-modules';
import React  from 'react';
import styles from './PreHeadline.scss'


const PreHeadline = (props) => (
	<div styleName="pre-headline">
		{props.children}
	</div>
);


export default CSSModules(PreHeadline, styles);