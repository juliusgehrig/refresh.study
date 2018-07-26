import CSSModules from 'react-css-modules';
import React, {Component}  from 'react';
import styles from './SaveIcon.scss'



class SaveIcon  extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
	  return (
			<svg width="75px" height="75px" viewBox="0 0 75 75" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
			    <defs>
			        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
			            <stop stopColor="#FFFFFF" offset="0%"></stop>
			            <stop stopColor="#FFFFFF" stopOpacity="0.260275136" offset="100%"></stop>
			        </linearGradient>
			    </defs>
			    <g id="save_icon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			        <circle id="base" fill="#242424" fillRule="nonzero" cx="37.5" cy="37.5" r="37.5"></circle>
							<g styleName="icon_1">
								<g id="icon_1" transform="translate(22.000000, 22.000000)" fillRule="nonzero">
				            <rect styleName="base_1" fill="url(#linearGradient-1)" opacity="0.4" x="0" y="1" width="30" height="29" rx="3"></rect>
				            <path d="M14,0 L25,0 C25.5522847,-1.01453063e-16 26,0.44771525 26,1 L26,14.1473981 C26,14.6996829 25.5522847,15.1473981 25,15.1473981 C24.8050046,15.1473981 24.6142634,15.0903883 24.4512499,14.9833846 L20.0487501,12.0935385 C19.7155976,11.8748538 19.2844024,11.8748538 18.9512499,12.0935385 L14.5487501,14.9833846 C14.0870475,15.2864509 13.4670798,15.1578508 13.1640135,14.6961482 C13.0570098,14.5331347 13,14.3423935 13,14.1473981 L13,1 C13,0.44771525 13.4477153,1.01453063e-16 14,0 Z" styleName="bookmark_1" fill="#FFFFFF"></path>
				        </g>
							</g>
							<g styleName="icon_2">
				        <g id="icon_2" transform="translate(22.000000, 22.000000)" fillRule="nonzero">
				            <rect styleName="base_2" fill="url(#linearGradient-1)" opacity="0.4" x="0" y="1" width="30" height="29" rx="3"></rect>
				            <path d="M14,0 L25,0 C25.5522847,-1.01453063e-16 26,0.44771525 26,1 L26,14.1473981 C26,14.6996829 25.5522847,15.1473981 25,15.1473981 C24.8050046,15.1473981 24.6142634,15.0903883 24.4512499,14.9833846 L20.0487501,12.0935385 C19.7155976,11.8748538 19.2844024,11.8748538 18.9512499,12.0935385 L14.5487501,14.9833846 C14.0870475,15.2864509 13.4670798,15.1578508 13.1640135,14.6961482 C13.0570098,14.5331347 13,14.3423935 13,14.1473981 L13,1 C13,0.44771525 13.4477153,1.01453063e-16 14,0 Z" styleName="bookmark_2" opacity="0" fill="#FFFFFF"></path>
				        </g>
							</g>
			    </g>
			</svg>
		);
	}
  }

export default CSSModules(SaveIcon, styles);
