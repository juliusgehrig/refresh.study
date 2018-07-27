import CSSModules from 'react-css-modules';
import React  from 'react';
import styles from './Footer.scss'

import Wrapper from 'components/Wrapper'
import {Link} from 'react-router-dom'

const Footer = (props) => (
  <Wrapper>
    <div className="row center-xs">
      <div className="col-lg-10  col-xs-12">
        <div className="box">
          <footer styleName={`container-${props.theme}`}>
            <div styleName="sectionBig">
              <h4 styleName="sectionHeader">About</h4>
              <h3 styleName="whodis">Refresh is a project by <a styleName="textLink" target="blank" href="https://twitter.com/juliussohn">Julius Sohn</a> and <a styleName="textLink" target="blank" href="https://twitter.com/juliusgehrig">Julius Gehrig</a><br/> It was created at htw Berlin in 2018 as our thesis.</h3>
            </div>
            <div styleName="sectionSmall">
              <h4 styleName="sectionHeader">More info</h4>
              <Link styleName="link" to="/about">Design Process →</Link>
              <Link styleName="link" to="/reading-list">Reading List →</Link>
            </div>
            <div styleName="sectionBig">
              <h4 styleName="sectionHeader">Press</h4>
              <p styleName="pressText">If you'd like to write about Refresh feel free to use our <a styleName="textLink" target="blank" href="https://youtu.be/Fcke6xaHzOg">Video</a> or <a styleName="textLink" href="/assets/Press.zip">Download Our Press Kit</a> for high-res images. Feel free to quote this page and please link back to it. We’re also happy to answer any open questions you might have or give you more background information — <a styleName="textLink" href="mailto:hello@refresh.study">Just Email Us</a></p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </Wrapper>
);


export default CSSModules(Footer, styles);
