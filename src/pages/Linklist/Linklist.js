import CSSModules from 'react-css-modules';
import React  from 'react';
import styles from './Linklist.scss'

import Wrapper from 'components/Wrapper'
import RevealText from 'components/RevealText'
import LinkListLink from 'components/LinkListLink'
import Footer from 'components/Footer'

const Linklist = (props) => (
  <div styleName="container">
    <Wrapper>
      <h1 styleName="pageTitle">
        <RevealText text="Reading List"></RevealText>
      </h1>
      <h3 styleName="subheadline"><RevealText text="From our research"></RevealText></h3>
      <div class="row center-xs">
        <div class="col-md-9 col-xs-10">
          <div class="box">
            <div styleName="linkWrapper">
              <LinkListLink link="https://www.buzzfeed.com/josephbernstein/meet-the-man-who-invented-tabs" title="Meet The Man Who Invented The Browser Tab" description="Buzzfeed interview with Adam Stiles, the inventor of the browser tab"></LinkListLink>
              <LinkListLink link="https://www.ofcom.org.uk/research-and-data/telecoms-research/mobile-smartphones/smartphone-by-default-2016" title="Smartphone by default internet users" description="Research report by Ofcom on people who access the internet mainly through their smartphone"></LinkListLink>
              <LinkListLink link="https://medium.freecodecamp.org/browserhistory-2abad38022b1" title="The future of browser history" description="Patryk Adaś on the current state and the future of browser history"></LinkListLink>
              <LinkListLink link="https://www.youtube.com/watch?v=3c3Rt6QbHDw" title="A demonstration of the first web browser, the Nexus browser" description="Running on the original NeXT Computer System"></LinkListLink>
              <LinkListLink link="https://rybakov.com/blog/open_tabs_are_cognitive_spaces/" title="Open tabs are cognitive spaces" description="Michail Rybakov on why we have so many tabs open all the time"></LinkListLink>
              <LinkListLink link="https://www-s.acm.illinois.edu/macwarriors/projects/trailblazer/" title="Trailblazer: visual browser history" description="Visual browser history app for PowerPC macs"></LinkListLink>
              <LinkListLink link="https://www.ben-evans.com/benedictevans/2017/7/13/creation-and-consumption" title="Creation and consumption" description="Benedict Evans on the clichee that mobile is only used for consumption where PCs are used for creation"></LinkListLink>
              <LinkListLink link="https://9to5mac.com/2018/06/03/mobile-safari-is-holding-the-ipad-back/" title="Mobile Safari is holding the iPad back" description="9to5mac on why mobile safari is preventing the iPad from being a PC replacement"></LinkListLink>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
    <Footer></Footer>
  </div>
);


export default CSSModules(Linklist, styles);
