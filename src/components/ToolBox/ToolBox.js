import CSSModules from 'react-css-modules';
import React  from 'react';
import styles from './ToolBox.scss'


const ToolBox = (props) => (
  <div styleName="box">
    <img alt={props.title} styleName="icon" src={props.image}/>
    <p styleName="title">{props.title}</p>
    <p styleName="usecase">{props.usecase}</p>
  </div>
);


export default CSSModules(ToolBox, styles);
