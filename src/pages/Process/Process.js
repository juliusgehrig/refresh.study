import CSSModules from 'react-css-modules';
import React  from 'react';
import styles from './Process.scss'

import Wrapper from 'components/Wrapper'

const Process = (props) => (
  <div styleName="container">
    <Wrapper>
    <h1 styleName="pageTitle">
      Design process
    </h1>
    <h3 styleName="subheadline">How did we get here?</h3>
    <div class="row center-xs">
      <div class="col-xs-10">
        <div class="box">
          <img styleName="processImage" src="/assets/images/ideas.png"/>
        </div>
      </div>
      <div class="col-md-7 col-xs-10">
        <div class="box">
          <h3 styleName="headline">Backstory</h3>
          <p styleName="copy">Hey there! We are Julius Sohn and Julius Gehrig, designers and students of communication design at the university of applied sciences Berlin. Refresh is our bachelor thesis and was created at htw Berlin in 2018. When it came to picking a topic we decided that for our bachelor thesis we wanted to create a concept for a new web browser. At first the idea was to create a desktop browser concept but after getting our hands on a new iPad Pro and realising how much more of a pro device it had become compared to older iPad models we decided to pivot and to come up with a concept for a mobile browser and specifically one for iPad even though it can be applied to desktop computers and smartphones as well.
          </p>
        </div>
      </div>
      <div class="col-xs-10">
        <div class="box">
          <img styleName="processImage" src="/assets/images/ideas.png"/>
        </div>
      </div>
      <div class="col-md-7 col-xs-10">
        <div class="box">
          <h3 styleName="headline">Coming up with ideas</h3>
          <p styleName="copy">When we started working on Refresh we put a lot of effort into researching the history of the web browser over the last 27 years. We read every wikipedia article related to the topic, research papers on mobile internet usage, as well as blog posts and statistics (Fun fact: We emailed Tim-Berners-Lee for Feedback but he never replied). We also ran our own little survey about how people use their web browser. The results can be found here. We downloaded and tested every web browser we could find both for desktop and mobile and compared their feature sets and how they approach different aspects of the browser. From our research we decided that the main areas we wanted to focus on were tab management, saving information for later, and context sensitivity. Some of the solutions for these areas we came up with early on but most were developed through iteration and feedback loops.
          </p>
        </div>
      </div>
      <div class="col-xs-10">
        <div class="box">
          <img styleName="processImage" src="/assets/images/framerScreenshot.png"/>
        </div>
      </div>
      <div class="col-md-7 col-xs-10">
        <div class="box">
          <h3 styleName="headline">Prototyping</h3>
          <p styleName="copy">We chose Framer as our prototyping tool, because on one hand we really wanted to focus on the details and animations of every interaction, on the other hand the prototypes contained a lot of of data. Handling this amount of data would be a huge effort to change the design when using a graphic based tool. We started of with the plan to build a single prototype for the whole project and came to a point where we nearly had a working version of Safari inside Framer  – including browsing websites, opening multiple tabs and switching between them and switching to the tab overview. At this point we reached performance limits of framer and decided to split the project into multiple prototypes with shared modules and data. The data is managed in a single JSON file, containing all spaces, their open tabs, saved sites and browsing history. Every prototype would fetch the data it needs from this file to ensure the information is in sync.
          </p>
        </div>
      </div>
      <div class="col-md-8 col-xs-10">
        <div class="box">
          <div styleName="toolWrapper">
            <div styleName="toolContainer">
              <div styleName="toolbox">
                <img styleName="toolIcon" src="/assets/images/Tools/Abstract.png"/>
                <p styleName="toolTitle">Abstract</p>
                <p styleName="toolUsecase">Version control</p>
              </div>
              <div styleName="toolbox">
                <img styleName="toolIcon" src="/assets/images/Tools/Notion.png"/>
                <p styleName="toolTitle">Notion</p>
                <p styleName="toolUsecase">Writing</p>
              </div>
              <div styleName="toolbox">
                <img styleName="toolIcon" src="/assets/images/Tools/Sketch.png"/>
                <p styleName="toolTitle">Sketch</p>
                <p styleName="toolUsecase">Graphic Design</p>
              </div>
              <div styleName="toolbox">
                <img styleName="toolIcon" src="/assets/images/Tools/Framer.png"/>
                <p styleName="toolTitle">Framer</p>
                <p styleName="toolUsecase">Prototyping</p>
              </div>
              <div styleName="toolbox">
                <img styleName="toolIcon" src="/assets/images/Tools/Trello.png"/>
                <p styleName="toolTitle">Trello</p>
                <p styleName="toolUsecase">Planning</p>
              </div>
              <div styleName="toolbox">
                <img styleName="toolIcon" src="/assets/images/Tools/VSCode.png"/>
                <p styleName="toolTitle">VS Code</p>
                <p styleName="toolUsecase">Coding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-7 col-xs-10">
        <div class="box">
          <div styleName="contactWrapper">
            <p styleName="contactText">If you have any questions or just want to say hi you can email us at </p>
            <p styleName="bigCenteredText">info@refresh.study</p>
          </div>
        </div>
        <div class="box">
          <div styleName="contactWrapper">
            <p styleName="contactText">Special thanks go to</p>
            <p styleName="bigCenteredText">Adreas Ingerl, Hans Pagel, Marvin Labod, Fabricio Rosa Marques, Adam Renklint, Jan Martin, Max Fellmuth, Joshua Söhn, Linus Kuner, Sophia Schiebler, Anna Karmann</p>
          </div>
        </div>
      </div>
      <div class="col-xs-12">
        <div class="box">
          <img styleName="processImage" src="/assets/images/Impressions.png"/>
        </div>
      </div>
      <div class="col-md-7 col-xs-10">
        <div class="box">
          <div styleName="contactWrapper">
            <p styleName="bigCenteredText">Thank you for your time &nbsp;☀️</p>
          </div>
        </div>
      </div>
    </div>
    </Wrapper>
  </div>
);


export default CSSModules(Process, styles);
