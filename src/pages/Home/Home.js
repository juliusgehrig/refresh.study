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


class Home extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			currentPreview: 0,
			currentFocus: 0,
			focusEnabled: true
		}
	}



	render() {
		const { currentPreview, currentFocus, focusEnabled } = this.state
		return (<div >
			<Hero></Hero>
			<br />
			<br />
			<br />
			<br />
			<br />
			<section styleName="section-spaces">
				<div className="row middle-xs center-xs">
					<div className="col-lg-5">
						<SpacesHeadline></SpacesHeadline>
						<p>When saving a website it gets categorized by type and content and added to the current space. When browsing through you space you can easily find all saved video in the video category. Saved websites appear in the category with a preview, showing contextual information depending on its type.</p>
					</div>
					<div className="col-lg-4">
					</div>
				</div>
			</section>
			<section styleName="section-previews">
				<div className="row middle-xs center-xs">
					<div className="col-lg-4">
						<Previews current={currentPreview} ></Previews>
					</div>
					<div className="col-lg-5">
						<h2>Types & categories</h2>

						<p>When saving a website it gets categorized by type and content and added to the current space. When browsing through you space you can easily find all saved video in the video category. Saved websites appear in the category with a preview, showing contextual information depending on its type.</p>
						<TabControl onSelect={index => { this.setState({ currentPreview: index }) }} items={['Video & Music', 'Articles', 'Shopping', 'Events']} />
					</div>
				</div>
			</section>
			<section styleName="section-search">
				<div className="row center-xs">
					<div className="col-lg-5">
						<SearchHeadline></SearchHeadline>
						<p>Sometimes it’s hard to remember the exact title or URL of a page you visited but you can remember roughly when or where you visited it. The tag based search in the address bar helps with fuzzy searching your history by locations, date, time, and wether an page has been saved or not. </p>
					</div>
				</div>
				<div className="row center-xs">
					<div className="col-lg-7">
						<img src="/assets/images/tag-search.png" alt="" />
					</div>
				</div>
			</section>

			<section styleName="section-focus">
				<div className="row middle-xs center-xs">
					<div className="col-lg-8">
						<FocusHeadline/>
						<p>The fact that a lot of websites are still not optimised for mobile consumption forces us to think about the reasons for that. Mobile optimisation is a costly undertaking which many website owners can't afford, leading to users switching to mobile optimised alternatives of big players and polarising the market. Supporting creators by letting browsers to do more of the work can slow this process down on one hand and achieve better compatibility with older devices on the other hand.
						Even though are plenty of apps that satisfy most needs, the web browser is still the main access point to the Internet for the average user. If your browser thinks the website your visiting consists mainly of written information it will ask you if you want to view this site in Reader View. Refresh applies this to many more scenarios like music, videos, and forms.
					</p>
					</div>
				</div>
				<div className="row middle-xs center-xs">
					<div className="col-lg-8">
						<div styleName="focusControls">
							<div>
								<TabControl onSelect={index => { this.setState({ currentFocus: index }) }} items={['Music', 'Article', 'Forms']} />
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
			</section>
		</div>);
	}
}

export default CSSModules(Home, styles);
