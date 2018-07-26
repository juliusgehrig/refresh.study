import CSSModules from 'react-css-modules';
import React from 'react';
import styles from './Home.scss'
import SearchHeadline from 'components/SearchHeadline'
import SpacesHeadline from 'components/SpacesHeadline'
import FocusHeadline from 'components/FocusHeadline'
import TabControl from 'components/TabControl'
import Previews from 'components/Previews'
import Focus from 'components/Focus'
import Toggle from 'components/Toggle'
import Hero from 'components/Hero'
import Wrapper from 'components/Wrapper'
import Footer from 'components/Footer'
import DeviceFrame from 'components/DeviceFrame'
import GesturesDemo from 'components/GesturesDemo'
import TabsIcon from 'components/TabsIcon'
import ContextIcon from 'components/ContextIcon'
import SaveIcon from 'components/SaveIcon'


class Home extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			currentPreview: 0,
			currentFocus: 0,
			focusEnabled: true
		}
	}


	renderFocus() {
		const { currentFocus, focusEnabled } = this.state
		const tabs = [
			<div className="iconTab"><img src="/assets/images/icons/music.svg" alt="Music" /> <div>Music</div></div>,
			<div className="iconTab"><img src="/assets/images/icons/article.svg" alt="Article" /> <div>Articles</div></div>,
			<div className="iconTab"><img src="/assets/images/icons/form.svg" alt="Form" /> <div>Forms</div></div>,
		]
		return (
			<section styleName="section-focus">
				<Wrapper>
					<div className="row middle-xs center-xs">
						<div className="col-lg-10  col-xs-11">
							<div styleName="section-intro">
								<FocusHeadline />
								<p>The fact that a lot of websites are still not optimised for mobile consumption forces us to think about the reasons for that. Mobile optimisation is a costly undertaking which many website owners can't afford, leading to users switching to mobile optimised alternatives of big players and polarising the market. Supporting creators by letting browsers to do more of the work can slow this process down on one hand and achieve better compatibility with older devices on the other hand.
								If the browser detects that a website consists mainly of written information it suggests to view this site in Reader Mode. Refresh applies this concept to articles, forms, and music.
								</p>
							</div>
						</div>
					</div>
					<div className="row middle-xs center-xs">
						<div className="col-lg-8 col-sm-9 col-xs-11">
							<div styleName="focusControls">
								<div>
									<TabControl onSelect={index => { this.setState({ currentFocus: index }) }} items={tabs} />
								</div>
								<div styleName="focusToggle">
									<div onClick={() => { this.setState({ focusEnabled: false }) }} styleName={`focusToggleLabel${!focusEnabled ? '-enabled' : ''}`}>Default</div>
									<div styleName="focusToggleSwitch">
										<Toggle enabled={focusEnabled} onSwitch={enabled => { this.setState({ focusEnabled: enabled }) }} />
									</div>
									<div onClick={() => { this.setState({ focusEnabled: true }) }} styleName={`focusToggleLabel${focusEnabled ? '-enabled' : ''}`}>Focus</div>
								</div>
							</div>
							<Focus enabled={focusEnabled} current={currentFocus} />
						</div>
					</div>
				</Wrapper>
			</section>
		);
	}

	render() {
		const { currentPreview } = this.state
		return (<div >
			<Hero></Hero>
			<section styleName="section">

				<Wrapper>
					<div className="row center-xs">
						<div className="col-lg-8 col-md-8 col-sm-8 col-xs-10">
							<p styleName="intro">
								We spend so much time browsing the web that we hardly even think about the browser as an app. And while the web itself has undergone big changes in the last twenty years, browsers have remained largely the same. Refresh is a concept for a modern web browser based on iOS Safari.
					</p>
						</div>
					</div>
				</Wrapper>
			</section>
			<section styleName="section-problems">
				<Wrapper>
					<div className="row center-xs">
						<div className="col-lg-4 col-md-3 col-sm-7 col-xs-11">
							<div styleName="problem-icon">
								<TabsIcon/>
							</div>
							<h2>Tab management</h2>
							<p>Managing a lot of open tabs that span across different tasks should be easier to handle. Browsers should help in sorting open tabs and making sense of past browsing sessions.</p>
						</div>
						<div className="col-lg-4 col-md-3 col-sm-7 col-xs-11">
							<div styleName="problem-icon">
								<SaveIcon/>
							</div>
							<h2>Saving & recalling</h2>
							<p>Saving information and files for later should be more intuitive. The browser should help categorising saved information and surface it when it could be relevant. </p>
						</div>
						<div className="col-lg-4 col-md-3 col-sm-7 col-xs-11">
							<div styleName="problem-icon">
								<ContextIcon/>
							</div>
							<h2>Context sensitivity</h2>
							<p>Browsers should be more proactive in suggesting useful actions depending the different types of websites that you’re visiting. </p>
						</div>

					</div>
				</Wrapper>
			</section>
			<section styleName="section-spaces">
				<Wrapper>
					<div className="row middle-xs center-xs">
						<div className="col-lg-10  col-xs-11">
							<div styleName="section-intro">
								<h1 styleName="section-headline">Stay Organised</h1>
								<p>Tabs were introduced to the browser to offer the ability to browser multiple websites in one browser window. But they have become a lot more than that. Leaving tabs open is a common way to remind yourself of something later. But those open tabs are there all the time to distract us from what we want to work on right now. Refresh lets you to organise your browsing in Spaces.
									A Space is a collection of open tabs and pages you saved for later centered around a topic or a part of your life. Bookmarks, favorites, and the reading list are reduced to one simple way to save pages for later. Saved pages are connected to each Space and are previewed visually below your open tabs. They are automatically grouped by categories with the option to create your own groups if you want to.
								</p>
								<DeviceFrame>
									<img alt="Space Overview" src="/assets/images/Space Overview.png"/>
								</DeviceFrame>
							</div>
						</div>
					</div>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
					<div className="row middle-xs center-xs">
						<div className="col-lg-4 col-md-4 col-xs-11">
							<SpacesHeadline></SpacesHeadline>
							<p>Create a space for work, one for research of your thesis, and one for that Thailand trip you’ve been planning. Every time you switch between Spaces all open tabs and saved links are still there, but they won’t disturb you when you want to focus on something different.</p>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-7 col-xs-11">
							<img alt="Create New Space" styleName="new-space-img" src="/assets/images/newspace.png"/>
						</div>
					</div>
					<div className="row middle-xs center-xs">
						<div className="col-lg-8  col-xs-11">
							<div styleName="flex-wrapper">
								<div styleName="flex-container">
									<img alt="Space Switcher" styleName="space-switcher-img" src="/assets/images/switcher.png"/>
								</div>
								<div styleName="flex-container">
									<p>Quickly switch between Spaces using the Space Switcher. It can be accessed from the tab overview or the address bar.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-8  col-xs-11">
							<div styleName="flex-wrapper">
								<div styleName="flex-container">
									<p styleName="share-space-text">Share a space with one or more friends to collaborate on it. All saved sites are kept in sync between the collaborators.</p>
								</div>
								<div styleName="flex-container">
									<img alt="Space Switcher" styleName="share-space-img" src="/assets/images/share_space.png"/>
								</div>
							</div>
						</div>
					</div>
					<div styleName="section-previews">
						<div className="row middle-xs center-xs">
							<div className="col-lg-6 col-md-6 col-xs-11">
								<h2>Smart link previews</h2>
								<p>Saved links are automatically categorised by type and content when they’re added to a Space. A preview is generated based on the content type of the link that displays contextual information.</p>
								<TabControl onSelect={index => { this.setState({ currentPreview: index }) }} items={['Shopping', 'Articles', 'Video & Music', 'Events']} />
							</div>
							<div className="col-lg-6 col-md-5 col-xs-11">
								<Previews current={currentPreview} ></Previews>
							</div>
						</div>
					</div>
				</Wrapper>
			</section>
			<section styleName="section-history">
				<Wrapper>
					<div className="row middle-xs center-xs">
						<div className="col-lg-10  col-xs-11">
							<div styleName="section-intro">
							<h1 styleName="section-headline">Browsing History</h1>
							<p>Finding pages you have visited a while ago can get tricky if you can’t remember the exact page title or URL. And the browsing history in most browsers is nothing more than a list of links without context or information on the relations between them.
Maybe you’re looking for a website you visited a while ago. Or maybe you’re just wondering how exactly you landed on the page you’re on right now.
								 Refresh lets you look at your browsing history in a new way and easily find pages you visited in the past. Get a better overview over your browsing activity, see the flow from page to page, and easily restore sessions using time travel.
					</p>
							<DeviceFrame>
									<img alt="History timeline" src="/assets/images/History-timeline.png"/>
								</DeviceFrame>
							</div>
						</div>
					</div>
				</Wrapper>
			</section>
			<section styleName="section-search">
				<Wrapper>
					<div className="row center-xs">
						<div className="col-lg-5 col-md-6 col-xs-11">
							<SearchHeadline></SearchHeadline>
							<p>Sometimes it’s hard to remember the exact title or URL of a page you visited but you can remember roughly when or where you visited it. The tag based search in the address bar helps with fuzzy searching your history by locations, date, time, and wether an page has been saved or not. </p>
						</div>
					</div>
					<div className="row center-xs">
						<div className="col-lg-8 col-md-8 col-xs-11">
							<img styleName="search-tags-screen" src="/assets/images/tag-search.png" alt="Tag search" />
						</div>
					</div>
				</Wrapper>
			</section>
			{this.renderFocus()}
			<section styleName="section-search">
				<Wrapper>
					<div className="row center-xs">
						<div className="col-lg-5 col-md-6 col-xs-11">
							<h1>Navigation & Gestures</h1>
							<p>Navigation in the space overview goes along two axes: The horizontal one being time and the vertical one space. Go left to view your history and downloads (past) or right to open a new tab (future). Go up or down to switch between spaces, opening the previous or next one. Navigation is possible both through interface elements and two-finger-swipe gestures along the respective axis.</p>
						</div>
					</div>
					<div className="row center-xs">
						<div className="col-lg-10  col-xs-11">
							<GesturesDemo/>
						</div>
					</div>
				</Wrapper>
			</section>
			<Footer theme="dark"></Footer>
		</div >
		);
	}
}

export default CSSModules(Home, styles);
