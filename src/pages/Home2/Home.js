import CSSModules from 'react-css-modules';
import React, { Component } from 'react';
import styles from './Home.scss'

import Hero from 'components/Hero'
import Wrapper from 'components/Wrapper'
import Jens from 'components/Jens'
import Footer from 'components/Footer'
import PreHeadline from 'components/PreHeadline'
import ProblemBox from 'components/ProblemBox'
import DeviceFrame from 'components/DeviceFrame';
import DeviceSlider from 'components/DeviceSlider';
import RevealText from 'components/RevealText';


const spaceSliderItems = [
	{
		src: '/assets/videos/placeholder/test.mp4',
		type: 'video',
		title: 'Space Switcher',
		description: 'Lorem ipsum dolor sit amet',
		length: 5
	},
	{
		src: '/assets/images/placeholder/spaces.png',
		title: 'Suggested spaces',
		type: 'image',
		description: 'Lorem ipsum dolor sit amet',
		length: 5
	},
	{
		src: '/assets/videos/placeholder/test.mp4',
		title: 'Shared spaces',
		type: 'video',
		description: 'Lorem ipsum dolor sit amet',
		length: 5
	}
]
return (
	<div styleName="container">
		<Hero />
		<Wrapper>
			<div className="row center-xs">
				<div className="col-lg-8">
					<p>While web technologies and therefore the web as a whole is in constant progress and web services are making use of these advantages, browsers are still not much more than a frame for websites. From our research on the topic we identified key areas of the browsers that have to be improved to make it more usable for everyone and help the mobile browser catch up in everyday use cases. </p>
					<Jens title="Tab management">
						<p>Managing a lot of open tabs that span across different tasks should be easier to handle. The browser should assist in sorting currently open tabs and making sense of past browsing sessions.</p>
					</Jens>
					<Jens title="Saving information">
						<p>Saving information and files for later should be more intuitive. The browser should help categorising saved information and surface it when it could be relevant. </p>
					</Jens>
					<Jens title="Context awarereness">
						<p>The browser should be more proactive in suggesting useful actions depending on the websites you’re visiting. </p>
					</Jens>
				</div>
			</div>
		</Wrapper>

		<section styleName="section-spaces">
			<Wrapper>
				<div className="row">
					<div className="col-md-5 col-lg-5">
						<PreHeadline color="red">Spaces</PreHeadline>
						<h1>A space for everything</h1>
						<p>Spaces help you organise your web browsing activity. Create a space for work, one for research of your thesis, and one for that Thailand trip you’ve been planning. Every time you switch between Spaces all open tabs and saved links are still there, but they won’t disturb you when you want to focus on something different. </p>
						<ProblemBox color="red">
							<p>Tabs were introduced to the browser to offer the ability to browser multiple websites in one browser window. But they have become a lot more than that. Two thirds of the participants of our survey stated that leaving tabs open was their main way of saving websites for future reference. And while this can work all those open tabs are there all the time to distract us from what we want to work on right now. With Spaces we're trying to make it easier to sort everything you want to work on right now as well as the things you want to come back to later.</p>
						</ProblemBox>
					</div>
					<div className="col-md-12">
						<div styleName="spaces-device-1-container">
							<div styleName="spaces-device-1">
								<DeviceFrame>
									<img src="/assets/images/placeholder/spaces.png" alt="" />
								</DeviceFrame>
							</div>
						</div>

					</div>
				</div>
				<div className="row center-xs">
					<div className="col-lg-10">
						<DeviceSlider items={spaceSliderItems} />

					</div>
				</div>
			</Wrapper>

		</section>
		<section styleName="section-history">
			<Wrapper>
				<div className="row end-xs">

					<div className="col-md-5 col-lg-5">
						<PreHeadline color="orange">Browsing history</PreHeadline>
						<h1>Learning from history</h1>
						<p>Browser history is a feature almost everyone is aware of, but hardly anyone actively uses. We believe that by presenting the browser history in a more human readable format than links with timestamps it can provide a better understanding of your browsing activity.</p>
						<ProblemBox color="orange">
							<p>The browser should not only be useful in the moment when you're looking something up, but also when you're trying to make sense of how you got to a certain place. Displaying merely a list of links with a timestamp fails to provide the context of how you got to which site and the sequence of links you visited. </p>
						</ProblemBox>
					</div>
					<div className="col-md-12">
						<div styleName="history-figure-1-container">
							<div styleName="history-figure-1">
								<img src="/assets/images/history.png" alt="" />
							</div>
						</div>

					</div>
				</div>
				<div className="row center-xs">
					<div className="col-lg-10">
						<DeviceSlider items={spaceSliderItems} />
					</div>
				</div>

			</Wrapper>
		</section>
		<section styleName="section-context">
			<Wrapper>


				<div className="row between-xs">
					<div className="col-md-5 col-lg-5">
						<PreHeadline color="blue">Context</PreHeadline>
						<h1>Focus on what’s important</h1>
						<p>If your browser thinks the website your visiting consists mainly of written information it will ask you if you want to view this site in Reader View. We think this concept could apply to many more scenarios like music, videos, and forms. </p>

					</div>
					<div className="col-md-6">
						<ProblemBox color="blue">
							<p>The fact that a lot of websites are still not optimised for mobile consumption forces us to think about the reasons for that. Mobile optimisation is a costly undertaking which many website owners can't afford, leading to users switching to mobile optimised alternatives of big players and polarising the market. Supporting creators by letting browsers to do more of the work can slow this process down on one hand and achieve better compatibility with older devices on the other hand. Event though are plenty of apps that satisfy most needs, the web browser is still the main access point to the Internet for the average user.</p>
						</ProblemBox>

					</div>
				</div>
				<div className="row center-xs">
					<div className="col-lg-10">
						<DeviceSlider items={spaceSliderItems} />

					</div>
				</div>
			</Wrapper>

		</section>
		<Footer theme="dark"></Footer>



	</div>
)
};

<SearchHeadline></SearchHeadline>
	<SpacesHeadline></SpacesHeadline>
	<p>Lorem ipsum dolor</p>
		</div >);
	}
  }

export default CSSModules(Home, styles);
