import CSSModules from 'react-css-modules';
import React, {Component}  from 'react';
import styles from './Home.scss'
import SearchHeadline from 'components/SearchHeadline'
import SpacesHeadline from 'components/SpacesHeadline'



class Home  extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
	  return (<div>

			<SearchHeadline></SearchHeadline>
			<SpacesHeadline></SpacesHeadline>
			<p>Lorem ipsum dolor</p>
		</div>);
	}
  }

export default CSSModules(Home, styles);
