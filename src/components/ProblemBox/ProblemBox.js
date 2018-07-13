import CSSModules from 'react-css-modules';
import React  from 'react';
import styles from './ProblemBox.scss'


const ProblemBox = (props) => (
	<div styleName={`problem-box-${props.color}`}>
		<b>What are we trying to solve?</b>
		{props.children}
	</div>
);

ProblemBox.defaultProps = {
	color: 'red'
}

export default CSSModules(ProblemBox, styles);