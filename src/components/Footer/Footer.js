import CSSModules from 'react-css-modules';
import React from 'react';
import styles from './Footer.scss'

import Wrapper from 'components/Wrapper'
import { Link } from 'react-router-dom'

const Footer = (props) => (
  <Wrapper>
    <div className="row center-xs">
      <div className="col-lg-10  col-xs-12">
        <div className="box">
          <footer styleName={`container-${props.theme}`}>
            <div styleName="sectionBig">
              <h4 styleName="sectionHeader">About</h4>
              <h3 styleName="whodis">Refresh is a project by <a styleName="textLink" target="blank" href="https://twitter.com/juliussohn">Julius Sohn</a> and <a styleName="textLink" target="blank" href="https://twitter.com/juliusgehrig">Julius Gehrig</a><br /> It was created at htw Berlin in 2018 as our thesis.</h3>
            </div>
            <div styleName="sectionSmall">
              <h4 styleName="sectionHeader">More info</h4>
              <Link styleName="link" to="/about">Design Process →</Link>
              <Link styleName="link" to="/reading-list">Reading List →</Link>
            </div>
            <div styleName="sectionBig">
              <h4 styleName="sectionHeader">Press</h4>
              <p styleName="pressText">If you'd like to write about Refresh feel free to use our <a styleName="textLink" target="blank" href="https://youtu.be/tulrXs47HTw">Video</a> or <a styleName="textLink" href="https://www.dropbox.com/s/is3luc5u1q9k1ci/Press.zip?dl=1">Download Our Press Kit</a> for high-res images. {/*For more background knowledge read our <a target="_blank" styleName="textLink" href="/assets/Thesis_Refresh.pdf">Thesis</a>.*/} Feel free to quote this page and please link back to it. We’re also happy to answer any open questions you might have or give you more background information — <a styleName="textLink" href="mailto:hello@refresh.study">Just Email Us</a></p>
            </div>
            <div styleName="sectionSmall">
              <h4 styleName="sectionHeader">License</h4>
              
              <p styleName="pressText">This work is licensed under a <a target="_blank" styleName="textLink" rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.</p>
              <a target="_blank" rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" styles="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </Wrapper>
);


export default CSSModules(Footer, styles);
