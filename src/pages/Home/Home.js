import CSSModules from 'react-css-modules';
import React from 'react';
import styles from './Home.scss'

import Hero from 'components/Hero'
import Wrapper from 'components/Wrapper'
import Jens from 'components/Jens'
import PreHeadline from 'components/PreHeadline'
import ProblemBox from 'components/ProblemBox'
import DeviceFrame from 'components/DeviceFrame';
import DeviceSlider from 'components/DeviceSlider';

const Home = (props) => {

	const spaceSliderItems = [
		{
			element: <img src="/assets/images/placeholder/spaces.png" alt="" />,
			title: 	'Space Switcher',
			description: 'Lorem ipsum dolor sit amet'
		},
		{
			element: <img src="/assets/images/placeholder/header.png" alt="" />,
			title: 	'Space Switcher',
			description: 'Lorem ipsum dolor sit amet'
		},
		{
			element: <img src="/assets/images/placeholder/spaces.png" alt="" />,
			title: 	'Space Switcher',
			description: 'Lorem ipsum dolor sit amet'
		}
	]
	return(
	<div>
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
						<PreHeadline>Spaces</PreHeadline>
						<h1>A space for everything</h1>
						<p>Spaces help you organise your web browsing activity. Create a space for work, one for research of your thesis, and one for that Thailand trip you’ve been planning. Every time you switch between Spaces all open tabs and saved links are still there, but they won’t disturb you when you want to focus on something different. </p>
						<ProblemBox>
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



	</div>
)};


export default CSSModules(Home, styles);