import CSSModules from 'react-css-modules';
import React  from 'react';
import styles from './DeviceFrame.scss'

const DeviceFrame = (props) => (
	<div styleName="container">
		<div styleName={`content-${props.type}-${props.orientation}`}>{props.children}</div>
		<div styleName={`${props.type}-${props.color}-${props.orientation}`}></div>
	</div>
);

DeviceFrame.defaultProps = {
	type: 'ipad',
	orientation: 'landscape',
	color: 'grey'
  };

export default CSSModules(DeviceFrame, styles);