import CSSModules from 'react-css-modules';
import React  from 'react';
import styles from './PreHeadline.scss'


const PreHeadline = (props) => (
	<div styleName={`pre-headline-${props.color}`}>
		{props.children}
	</div>
);

PreHeadline.defaultProps = {
	color: 'red'
}


export default CSSModules(PreHeadline, styles);