import CSSModules from 'react-css-modules';
import React  from 'react';
import styles from './ReplayButton.scss'


const ReplayButton = (props) => (
	<div styleName="container">
		<a styleName="button" onClick={props.onClick}  > <img src="/assets/images/icons/refresh.svg" alt=""/><div>Replay</div></a>

	</div>

);

ReplayButton.defaultProps = {
	onClick: ()=>{}
}


export default CSSModules(ReplayButton, styles);