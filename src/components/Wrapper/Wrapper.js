import CSSModules from 'react-css-modules';
import React  from 'react';
import styles from './Wrapper.scss'


const Wrapper = (props) => (
	<div styleName="wrapper">
		{props.children}
	</div>
);


export default CSSModules(Wrapper, styles);