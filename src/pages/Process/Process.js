import CSSModules from 'react-css-modules';
import React  from 'react';
import styles from './Process.scss'

import Wrapper from 'components/Wrapper'
import ToolBox from 'components/ToolBox'
import RevealText from 'components/RevealText'
import Footer from 'components/Footer'
import CookieBanner from 'components/CookieBanner'

const Process = (props) => (
  <div styleName="container">
    <Wrapper>
    <h1 styleName="pageTitle">
      <RevealText text="About"></RevealText>
    </h1>
    <h3 styleName="subheadline"><RevealText text="How did we get here"></RevealText></h3>
    <div class="row center-xs">
      <div class="col-sm-10 col-xs-11">
        <div class="box">
          <img alt="Julius und Julius" styleName="processImage" src="/assets/images/us.jpg"/>
        </div>
      </div>
      <div class="col-md-7 col-xs-10 col-xs-11">
        <div class="box">
          <h3 styleName="headline">Backstory</h3>
          <p styleName="copy">We are <a styleName="textLink" target="_blank" rel="noopener noreferrer" href="http://juliussohn.de">Julius Sohn ↗</a> and <a styleName="textLink" target="_blank" rel="noopener noreferrer" href="https://julius.fm">Julius Gehrig ↗</a>, designers and students of communication design. Refresh is our bachelor thesis and was created at htw Berlin in 2018. It's a collection of ideas for a modern web browser for touchscreen devices based on iOS Safari. The prototypes we developed are all designed for iPad but their concepts could apply to desktop and smaller touchscreens as well.
          </p>
        </div>
      </div>
      <div class="col-sm-10 col-xs-11">
        <div class="box">
          <img alt="Ideation" styleName="processImage" src="/assets/images/ideas.png"/>
        </div>
      </div>
      <div class="col-md-7 col-sm-10 col-xs-11">
        <div class="box">
          <h3 styleName="headline">Coming up with ideas</h3>
          <p styleName="copy">When we started working on Refresh we put a lot of effort into researching the history of the web browser over the last 27 years. We read every wikipedia article related to the topic, research papers on mobile internet usage, as well as blog posts and statistics (Fun fact: We emailed Tim-Berners-Lee for Feedback but he never replied). We also ran our own little survey about how people use their web browser. The results can be found<a target="_blank" rel="noopener noreferrer" styleName="textLink" href="https://juliusgehrig.typeform.com/report/exkjqK/ksEMahTICqR5cypC"> here ↗</a>. We downloaded and tested every web browser we could find both for desktop and mobile and compared their feature sets and how they approach different aspects of the browser. From our research we decided that the main areas we wanted to focus on were tab management, saving information for later, and context sensitivity. Some of the solutions for these areas we came up with early on but most were developed through iteration and feedback loops.
          </p>
        </div>
      </div>
      <div class="col-sm-10 col-xs-11">
        <div class="box">
          <img alt="Framer" styleName="processImage" src="/assets/images/framerScreenshot.png"/>
        </div>
      </div>
      <div class="col-md-7 col-xs-10 col-xs-11">
        <div class="box">
          <h3 styleName="headline">Prototyping</h3>
          <p styleName="copy">We chose Framer as our prototyping tool, because on one hand we really wanted to focus on the details and animations of every interaction, on the other hand the prototypes contained a lot of of data. Handling this amount of data would be a huge effort to change the design when using a graphic based tool. We started of with the plan to build a single prototype for the whole project and came to a point where we nearly had a working version of Safari inside Framer  – including browsing websites, opening multiple tabs and switching between them and switching to the tab overview. At this point we reached performance limits of framer and decided to split the project into multiple prototypes with shared modules and data. The data is managed in a single JSON file, containing all spaces, their open tabs, saved sites and browsing history. Every prototype would fetch the data it needs from this file to ensure the information is in sync.
          </p>
        </div>
      </div>
      <div class="col-md-8 col-sm-10 col-xs-11">
        <div class="box">
          <div styleName="toolWrapper">
            <div styleName="toolContainer">
              <ToolBox title="Abstract" image="/assets/images/Tools/Abstract.png" usecase="Version Control"></ToolBox>
              <ToolBox title="Notion" image="/assets/images/Tools/Notion.png" usecase="Writing"></ToolBox>
              <ToolBox title="Sketch" image="/assets/images/Tools/Sketch.png" usecase="Graphic Design"></ToolBox>
              <ToolBox title="Framer" image="/assets/images/Tools/Framer.png" usecase="Prototyping"></ToolBox>
              <ToolBox title="Trello" image="/assets/images/Tools/Trello.png" usecase="Planning"></ToolBox>
              <ToolBox title="VS Code" image="/assets/images/Tools/VSCode.png" usecase="Coding"></ToolBox>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-7 col-sm-10 col-xs-11">
        <div class="box">
          <div styleName="contactWrapper">
            <p styleName="contactText">If you have any questions or just want to say hi you can email us at </p>
            <a styleName="mailLink" href="mailto:hello@refresh.study"><p styleName="bigCenteredText">hello@refresh.study</p></a>
          </div>
        </div>
        <div class="box">
          <div styleName="contactWrapper">
            <p styleName="contactText">Special thanks go to</p>
            <p styleName="bigCenteredText"><RevealText text="Adreas Ingerl, Hans Pagel, Marvin Labod, Fabricio Rosa Marques, Adam Renklint, Jan Martin, Max Fellmuth, Joshua Söhn, Linus Kuner, Sophia Schiebler, Anna Karmann"></RevealText></p>
          </div>
        </div>
      </div>
      <div class="col-xs-12">
        <div class="box">
          <img alt="Impressions" styleName="processImage" src="/assets/images/Impressions.jpg"/>
        </div>
      </div>
    </div>
    <CookieBanner/>
    </Wrapper>
    <Footer theme="light"></Footer>
  </div>
);


export default CSSModules(Process, styles);
