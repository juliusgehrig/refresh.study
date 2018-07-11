import CSSModules from 'react-css-modules';
import React  from 'react';
import styles from './ProblemBox.scss'


const ProblemBox = (props) => (
	<div styleName="problemBox">
		<b>What are we trying to solve?</b>
		{props.children}
	</div>
);


export default CSSModules(ProblemBox, styles);