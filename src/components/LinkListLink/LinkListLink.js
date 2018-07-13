import CSSModules from 'react-css-modules';
import React  from 'react';
import styles from './LinkListLink.scss'


const LinkListLink = (props) => (
  <div styleName="linkContainer">
    <a href={props.link} styleName="linkBox">
      <p styleName="linkTitle">{props.title}</p>
      <p styleName="linkDescription">{props.description}</p>
    </a>
  </div>
);


export default CSSModules(LinkListLink, styles);
