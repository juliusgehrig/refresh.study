import CSSModules from 'react-css-modules';
import React from 'react';
import styles from './Jens.scss'


const Jens = (props) => (
	<div styleName="container">
		<div className="row between-xs">
			<div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
			 <h2>{props.title}</h2>
			</div>
			<div className="col-xs-12 col-sm-8 col-md-6 col-lg-6">
				{props.children}
			</div>
		</div>
	</div>
);


export default CSSModules(Jens, styles);