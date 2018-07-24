import CSSModules from 'react-css-modules';
import React  from 'react';
import styles from './GesturesDemo.scss'
import VisibilitySensor from 'react-visibility-sensor';
import { Keyframes,interpolate, animated } from 'react-spring'
import delay from 'delay'

const Cursor = Keyframes.Spring({
    // Functions with side-effects
    swipeUp: async call => {
				call({ from: {y: 0, opacity: 0}, to: { y:-100, opacity: 0.9 } })
				await delay(300)
        await call({ to: { opacity: 0 } })
    },
		swipeDown: async call => {
        call({ to: { y:0, opacity: 0.9 } })
				await delay(300)
        await call({ to: { opacity: 0 } })
    }
})

const Screen = Keyframes.Spring({
    // Functions with side-effects
		default: {
			from: {r:26,g:27,b:32},
			to: {r:26,g:27,b:32}
		},
    swipeUp: async call => {
				call({ to: {r:26,g:27,b:32} })
				await delay(300)
    },
		swipeDown: async call => {
        call({ to: {r:26,g:27,b:32} })
				await delay(300)
    },
		swipeRight: async call => {
        call({ from: {r:26,g:27,b:32}, to: {r:235,g:236,b:242} })
				await delay(300)
    },
		swipeLeft: async call => {
        call({ to: {r:26,g:27,b:32} })
				await delay(300)
    }
})

const Search = Keyframes.Spring({
    // Functions with side-effects
		default: {
			from: {r:48,g:50,b:58},
			to: {r:48,g:50,b:58}
		},
    swipeUp: async call => {
				call({ to: {r:48,g:50,b:58} })
				await delay(300)
    },
		swipeDown: async call => {
        call({ to: {r:48,g:50,b:58} })
				await delay(300)
    },
		swipeRight: async call => {
        call({ from: {r:48,g:50,b:58}, to: {r:207,g:214,b:221} })
				await delay(300)
    },
		swipeLeft: async call => {
        call({ to: {r:48,g:50,b:58} })
				await delay(300)
    }
})

const CursorHorizontal = Keyframes.Spring({
    // Functions with side-effects
    swipeRight: async call => {
				call({ from: {x: 0, opacity: 0}, to: { x:100, opacity: 0.9 } })
				await delay(300)
        await call({ to: { opacity: 0 } })
    },
		swipeLeft: async call => {
        call({ to: { x:0, opacity: 0.9 } })
				await delay(300)
        await call({ to: { opacity: 0 } })
    }
})

const Spaces = Keyframes.Spring({
    // Functions with side-effects
		default: {
			from: {x:0, y: 0, opacitySpace1: 1, opacitySpace2: 0, opacityHistory: 0},
			to: {x:0, y: 0, opacitySpace1: 1, opacitySpace2: 0, opacityHistory: 0}
		},
    swipeUp: async call => {
				call({ from: {x:0, y: 0, opacitySpace1: 1, opacitySpace2: 0, opacityHistory: 0}, to: { x:0, y:-408, opacitySpace1: 0, opacitySpace2: 1, opacityHistory: 0} })
				await delay(300)
    },
		swipeRight: async call => {
				call({ from: {x:0, y: -408, opacitySpace1: 0, opacitySpace2: 1, opacityHistory: 0}, to: { x:625, y:-408, opacitySpace1: 0, opacitySpace2: 0, opacityHistory: 1 } })
				await delay(300)
    },
		swipeLeft: async call => {
				call({ to: { x:0, y:-408, opacitySpace1: 0, opacitySpace2: 1, opacityHistory: 0 } })
				await delay(300)
    },
		swipeDown: async call => {
        call({ to: { y:0, opacitySpace1: 1, opacitySpace2: 0 , opacityHistory: 0} })
				await delay(300)
    }
})

const SpaceDot = Keyframes.Spring({
    // Functions with side-effects
		default: {
			from: {r:0,g:122,b:255},
			to: {r:0,g:122,b:255}
		},
    swipeUp: async call => {
				call({ from: {r:0,g:122,b:255}, to: {r:255,g:45,b:85} })
				await delay(300)
    },
		swipeDown: async call => {
        call({ to: {r:0,g:122,b:255} })
				await delay(300)
    }
})

const Indicator = Keyframes.Spring({
    // Functions with side-effects
		default: {
			from: {r:207,g:212,b:216,x:645,w:40},
			to: {r:207,g:212,b:216,x:645,w:40}
		},
    swipeUp: async call => {
				call({ to: {r:207,g:212,b:216} })
				await delay(300)
    },
		swipeRight: async call => {
        call({ to: {r:132,g:136,b:147,x:585,w:50} })
				await delay(300)
    },
		swipeLeft: async call => {
        call({ to: {r:207,g:212,b:216,x:645,w:40} })
				await delay(300)
    },
		swipeDown: async call => {
        call({ to: {r:207,g:212,b:216} })
				await delay(300)
    }
})

const SpaceTitle = Keyframes.Spring({
    // Functions with side-effects
		default: {
			from: {r:224, g:227, b:241, width:73, actions: 202},
			to: {r:224, g:227, b:241, width:73, actions: 202}
		},
    swipeUp: async call => {
				call({ from: {r:224, g:227, b:241, width:73, actions: 202}, to: {r:224, g:227, b:241, width:103, actions: 232} })
				await delay(300)
    },swipeRight: async call => {
				call({ from: {r:224, g:227, b:241, width:73, actions: 202}, to: {r:65, g:68, b:79, width:103, actions: 232} })
				await delay(300)
    },swipeLeft: async call => {
				call({ from: {r:224, g:227, b:241, width:73, actions: 202}, to: {r:224, g:227, b:241, width:103, actions: 232} })
				await delay(300)
    },
		swipeDown: async call => {
        call({ to: {r:224, g:227, b:241, width:73, actions: 202} })
				await delay(300)
    }
})

class GesturesDemo  extends React.Component {
	constructor(props){
		super(props)
		this.state={
			visible: false,
			transition: 'default'
		}
		this.onChangeVisibility = this.onChangeVisibility.bind(this)
	}

	onChangeVisibility(visible) {
		if (!this.state.visible && visible) {
			this.setState({
				visible: true
			})
			this.startAnimation()
		}
	}

	startAnimation() {
		setTimeout(()=>{
			this.setState({
				transition: 'swipeUp'
			})
		},500)
		setTimeout(()=>{
			this.setState({
				transition: 'swipeRight'
			})
		},2500)
		setTimeout(()=>{
			this.setState({
				transition: 'swipeLeft'
			})
		},4500)
		setTimeout(()=>{
			this.setState({
				transition: 'swipeDown'
			})
		},6500)
    setTimeout(()=>{
			this.setState({
				transition: 'pause'
			})
      this.startAnimation()
		},8000)
	}
	render() {
	  return (
			<VisibilitySensor delayedCall={true} onChange={this.onChangeVisibility} >
				<svg width="800px" height="578px" viewBox="0 0 800 578" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
				    <defs>
				        <rect id="path-2" x="0" y="0" width="800" height="578" rx="26"></rect>
								<filter x="-2.5%" y="-3.5%" width="105.0%" height="106.9%" filterUnits="objectBoundingBox" id="filter-2">
				            <feGaussianBlur stdDeviation="20" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
				            <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
				            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
				            <feColorMatrix values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.0699162138 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
				        </filter>
				        <rect id="path-4" x="0" y="0" width="686" height="425"></rect>
				        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-6">
				            <stop stopColor="#E4E6ED" offset="0%"></stop>
				            <stop stopColor="#E4E6ED" offset="100%"></stop>
				        </linearGradient>
				    </defs>
				    <g id="New-Website" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				        <g id="Artboard-3" transform="translate(-261.000000, -214.000000)">
				            <g id="iPad" transform="translate(261.000000, 214.000000)">
				                <g id="iPad_base" fillRule="nonzero">
				                    <use fill="#24282C" xlinkHref="#path-2"></use>
				                    <use fillOpacity="0.12" fill="url(#radialGradient-1)" xlinkHref="#path-2"></use>
				                    <use fill="black" fillOpacity="1" filter="url(#filter-3)" xlinkHref="#path-2"></use>
				                </g>
												<Screen native state={this.state.transition}>
													{
														({r,g,b}) =>
				                	<animated.rect id="iPad_screen" stroke="#454A4E" fill={interpolate([r,g,b], (r,g,b) => `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`)} fillRule="nonzero" strokeLinecap="round" strokeLinejoin="round" x="55.5" y="29.5" width="689" height="519" rx="6"></animated.rect>
													}
												</Screen>
												<Search native state={this.state.transition}>
													{
														({r,g,b}) =>
														<React.Fragment>
					                		<animated.rect id="search" fill={interpolate([r,g,b], (r,g,b) => `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`)} fillRule="nonzero" x="88" y="99" width="155" height="23" rx="4"></animated.rect>
					                		<animated.rect id="divider" fill={interpolate([r,g,b], (r,g,b) => `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`)} fillRule="nonzero" x="250" y="120" width="462" height="2" rx="1"></animated.rect>
														</React.Fragment>
													}
												</Search>
												<Indicator native state={this.state.transition}>
													{
														({r,g,b,x,w}) =>
				                		<animated.rect id="active_indicator" fill={interpolate([r,g,b], (r,g,b) => `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`)} fillRule="nonzero" x={x} y="120" width={w} height="2" rx="1"></animated.rect>
													}
												</Indicator>
				                <rect id="tabs_tabs" fill="#888A94" fillRule="nonzero" x="645" y="105" width="40" height="8" rx="4"></rect>
				                <path d="M703,108 L707,108 C707.552285,108 708,108.447715 708,109 C708,109.552285 707.552285,110 707,110 L703,110 L703,114 C703,114.552285 702.552285,115 702,115 C701.447715,115 701,114.552285 701,114 L701,110 L697,110 C696.447715,110 696,109.552285 696,109 C696,108.447715 696.447715,108 697,108 L701,108 L701,104 C701,103.447715 701.447715,103 702,103 C702.552285,103 703,103.447715 703,104 L703,108 Z" id="newtab" fill="#888A94" fillRule="nonzero"></path>
				                <rect id="tabs_history" fill="#888A94" fillRule="nonzero" x="585" y="105" width="50" height="8" rx="4"></rect>
				                <rect id="tabs_downloads" fill="#888A94" fillRule="nonzero" x="510" y="105" width="65" height="8" rx="4"></rect>
												<SpaceTitle native state={this.state.transition}>
													{
														({width,r,g,b}) =>
													<React.Fragment>
														<animated.rect x="122" y="68" width={width} height="15" id="space_title" rx="8" fill={interpolate([r,g,b], (r,g,b) => `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`)} fillRule="nonzero"></animated.rect>
													</React.Fragment>
													}
												</SpaceTitle>
												<SpaceDot native state={this.state.transition}>
													{
														({r,g,b}) =>
													<React.Fragment>
														<animated.circle id="space_dot_base" fill={interpolate([r,g,b], (r,g,b) => `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`)} fillRule="nonzero" opacity="0.3" cx="100" cy="75" r="12"></animated.circle>
						                <animated.circle id="space_dot" fill={interpolate([r,g,b], (r,g,b) => `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`)} fillRule="nonzero" cx="100" cy="75" r="7"></animated.circle>
													</React.Fragment>
													}
												</SpaceDot>
												<g mask="url(#mask-5)" transform="translate(57,122)">
													<Spaces native state={this.state.transition}>
														{
															({x,y,opacitySpace1,opacitySpace2,opacityHistory}) =>
														<animated.g id="space_content" transform={interpolate([x,y], (x,y) => `translate(${0 + x}, ${0 + y})`)}>
						                    <mask id="mask-5" fill="white">
						                        <use xlinkHref="#path-4"></use>
						                    </mask>
						                    <g id="Mask" fillRule="nonzero"></g>
						                    <animated.g id="space_content_1" fillRule="nonzero" opacity={opacitySpace1}>
						                        <g transform="translate(31.000000, 17.000000)">
						                            <path d="M7,368 L140,368 C143.865993,368 147,371.134007 147,375 L147,408 L0,408 L0,375 C-4.73447626e-16,371.134007 3.13400675,368 7,368 Z" id="saved_preview" fill="#5B5D65"></path>
						                            <path d="M166,368 L299,368 C302.865993,368 306,371.134007 306,375 L306,408 L159,408 L159,375 C159,371.134007 162.134007,368 166,368 Z" id="saved_preview" fill="#5B5D65"></path>
						                            <path d="M325,368 L458,368 C461.865993,368 465,371.134007 465,375 L465,408 L318,408 L318,375 C318,371.134007 321.134007,368 325,368 Z" id="saved_preview" fill="#5B5D65"></path>
						                            <path d="M484,368 L617,368 C620.865993,368 624,371.134007 624,375 L624,408 L477,408 L477,375 C477,371.134007 480.134007,368 484,368 Z" id="saved_preview" fill="#5B5D65"></path>
						                            <rect id="section_title_2" fill="#888A94" x="0" y="346" width="97" height="10" rx="4"></rect>
						                            <rect id="tab_1" fill="url(#linearGradient-6)" x="0" y="1" width="197" height="147" rx="9"></rect>
						                            <rect id="saved_preview" fill="#5B5D65" x="0" y="205" width="147" height="82" rx="7"></rect>
						                            <rect id="saved_title" fill="#888A94" x="0" y="293" width="77" height="8" rx="4"></rect>
						                            <rect id="favicon" fill="#E4E6ED" x="0" y="306" width="6" height="6" rx="2"></rect>
						                            <rect id="saved_url" fill="#595B63" x="9" y="306" width="46" height="6" rx="3"></rect>
						                            <rect id="saved_title" fill="#888A94" x="159" y="293" width="107" height="8" rx="4"></rect>
						                            <rect id="favicon" fill="#E4E6ED" x="159" y="306" width="6" height="6" rx="2"></rect>
						                            <rect id="saved_url" fill="#595B63" x="168" y="306" width="44" height="6" rx="3"></rect>
						                            <rect id="saved_title" fill="#888A94" x="318" y="293" width="57" height="8" rx="4"></rect>
						                            <rect id="favicon" fill="#E4E6ED" x="318" y="306" width="6" height="6" rx="2"></rect>
						                            <rect id="saved_url" fill="#595B63" x="327" y="306" width="74" height="6" rx="3"></rect>
						                            <rect id="saved_title" fill="#888A94" x="477" y="293" width="127" height="8" rx="4"></rect>
						                            <rect id="favicon" fill="#E4E6ED" x="477" y="306" width="6" height="6" rx="2"></rect>
						                            <rect id="saved_url" fill="#595B63" x="486" y="306" width="53" height="6" rx="3"></rect>
						                            <rect id="saved_preview" fill="#5B5D65" x="159" y="205" width="147" height="82" rx="7"></rect>
						                            <rect id="saved_preview" fill="#5B5D65" x="318" y="205" width="147" height="82" rx="7"></rect>
						                            <rect id="saved_preview" fill="#5B5D65" x="477" y="205" width="147" height="82" rx="7"></rect>
						                            <rect id="tab_3" fill="url(#linearGradient-6)" x="427" y="0" width="197" height="147" rx="9"></rect>
						                            <rect id="tab_2" fill="url(#linearGradient-6)" x="214" y="0" width="197" height="147" rx="9"></rect>
						                            <rect id="divider" fill="#30323A" x="0" y="169" width="624" height="2" rx="1"></rect>
						                            <rect id="divider" fill="#30323A" x="0" y="332" width="624" height="2" rx="1"></rect>
						                            <rect id="section_title_1" fill="#888A94" x="0" y="183" width="77" height="10" rx="4"></rect>
						                            <path d="M616.449747,190.449747 L616.449747,186.449747 C616.449747,185.897463 616.897463,185.449747 617.449747,185.449747 C618.002032,185.449747 618.449747,185.897463 618.449747,186.449747 L618.449747,191.449747 C618.449747,192.002032 618.002032,192.449747 617.449747,192.449747 L612.449747,192.449747 C611.897463,192.449747 611.449747,192.002032 611.449747,191.449747 C611.449747,190.897463 611.897463,190.449747 612.449747,190.449747 L616.449747,190.449747 Z" id="collapse" fill="#CFD4D8" transform="translate(614.949747, 188.949747) scale(1, -1) rotate(45.000000) translate(-614.949747, -188.949747) "></path>
						                            <path d="M616.449747,353.449747 L616.449747,349.449747 C616.449747,348.897463 616.897463,348.449747 617.449747,348.449747 C618.002032,348.449747 618.449747,348.897463 618.449747,349.449747 L618.449747,354.449747 C618.449747,355.002032 618.002032,355.449747 617.449747,355.449747 L612.449747,355.449747 C611.897463,355.449747 611.449747,355.002032 611.449747,354.449747 C611.449747,353.897463 611.897463,353.449747 612.449747,353.449747 L616.449747,353.449747 Z" id="collapse" fill="#CFD4D8" transform="translate(614.949747, 351.949747) scale(1, -1) rotate(45.000000) translate(-614.949747, -351.949747) "></path>
						                        </g>
						                    </animated.g>
						                    <animated.g id="space_content_2" fillRule="nonzero" opacity={opacitySpace2}>
						                        <g transform="translate(31.000000, 425.000000)">
						                            <rect id="tab_1" fill="url(#linearGradient-6)" x="0" y="1" width="300" height="223.857868" rx="9"></rect>
						                            <rect id="saved_preview" fill="#5B5D65" x="0" y="281" width="147" height="82" rx="7"></rect>
						                            <rect id="saved_title" fill="#888A94" x="0" y="369" width="107" height="8" rx="4"></rect>
						                            <rect id="favicon" fill="#E4E6ED" x="0" y="382" width="6" height="6" rx="2"></rect>
						                            <rect id="saved_url" fill="#595B63" x="9" y="382" width="56" height="6" rx="3"></rect>
						                            <rect id="saved_title" fill="#888A94" x="159" y="369" width="77" height="8" rx="4"></rect>
						                            <rect id="favicon" fill="#E4E6ED" x="159" y="382" width="6" height="6" rx="2"></rect>
						                            <rect id="saved_url" fill="#595B63" x="168" y="382" width="55" height="6" rx="3"></rect>
						                            <rect id="saved_title" fill="#888A94" x="318" y="369" width="107" height="8" rx="4"></rect>
						                            <rect id="favicon" fill="#E4E6ED" x="318" y="382" width="6" height="6" rx="2"></rect>
						                            <rect id="saved_url" fill="#595B63" x="327" y="382" width="44" height="6" rx="3"></rect>
						                            <rect id="saved_title" fill="#888A94" x="477" y="369" width="68" height="8" rx="4"></rect>
						                            <rect id="favicon" fill="#E4E6ED" x="477" y="382" width="6" height="6" rx="2"></rect>
						                            <rect id="saved_url" fill="#595B63" x="486" y="382" width="70" height="6" rx="3"></rect>
						                            <rect id="saved_preview" fill="#5B5D65" x="159" y="281" width="147" height="82" rx="7"></rect>
						                            <rect id="saved_preview" fill="#5B5D65" x="318" y="281" width="147" height="82" rx="7"></rect>
						                            <rect id="saved_preview" fill="#5B5D65" x="477" y="281" width="147" height="82" rx="7"></rect>
						                            <rect id="tab_2" fill="url(#linearGradient-6)" x="324" y="0" width="300" height="223.857868" rx="9"></rect>
						                            <rect id="divider" fill="#30323A" x="0" y="245" width="624" height="2" rx="1"></rect>
						                            <rect id="section_title_1" fill="#888A94" x="0" y="259" width="67" height="10" rx="4"></rect>
						                            <path d="M616.449747,266.449747 L616.449747,262.449747 C616.449747,261.897463 616.897463,261.449747 617.449747,261.449747 C618.002032,261.449747 618.449747,261.897463 618.449747,262.449747 L618.449747,267.449747 C618.449747,268.002032 618.002032,268.449747 617.449747,268.449747 L612.449747,268.449747 C611.897463,268.449747 611.449747,268.002032 611.449747,267.449747 C611.449747,266.897463 611.897463,266.449747 612.449747,266.449747 L616.449747,266.449747 Z" id="collapse" fill="#CFD4D8" transform="translate(614.949747, 264.949747) scale(1, -1) rotate(45.000000) translate(-614.949747, -264.949747) "></path>
						                        </g>
						                    </animated.g>
						                    <animated.g id="space_content_history" opacity={opacityHistory}>
						                        <g transform="translate(-625.000000, 425.000000)">
						                            <rect id="time_divider" fill="#D4D7D9" fillRule="nonzero" x="528" y="46" width="1" height="362"></rect>
						                            <rect id="time_divider" fill="#D4D7D9" fillRule="nonzero" x="407" y="46" width="1" height="362"></rect>
						                            <rect id="time_divider" fill="#D4D7D9" fillRule="nonzero" x="286" y="46" width="1" height="362"></rect>
						                            <rect id="time_divider" fill="#D4D7D9" fillRule="nonzero" x="165" y="46" width="1" height="362"></rect>
						                            <rect id="time_divider" fill="#D4D7D9" fillRule="nonzero" x="44" y="46" width="1" height="362"></rect>
						                            <g id="Timeline" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(0.000000, 67.000000)">
						                                <rect id="Rectangle-2" fill="#FFFFFF" fillRule="nonzero" x="70" y="0" width="136" height="26" rx="6"></rect>
						                                <path d="M1,278 L200,278 C203.313708,278 206,280.686292 206,284 L206,298 C206,301.313708 203.313708,304 200,304 L1,304 L1,278 Z" id="Rectangle-2-Copy-20" fill="#FFFFFF" fillRule="nonzero"></path>
						                                <path d="M577,0 L650,0 L650,26 L577,26 C573.686292,26 571,23.3137085 571,20 L571,6 C571,2.6862915 573.686292,6.08718376e-16 577,0 Z" id="Rectangle-2-Copy-5" fill="#FFFFFF" fillRule="nonzero"></path>
						                                <path d="M0,48 L103,48 C106.313708,48 109,50.6862915 109,54 L109,68 C109,71.3137085 106.313708,74 103,74 L0,74 L0,48 Z" id="Rectangle-2-Copy" fill="#FFFFFF" fillRule="nonzero"></path>
						                                <path d="M0,96 L188,96 C191.313708,96 194,98.6862915 194,102 L194,116 C194,119.313708 191.313708,122 188,122 L0,122 L0,96 Z" id="Rectangle-2-Copy-6" fill="#FFFFFF" fillRule="nonzero"></path>
						                                <rect id="Rectangle-2-Copy-10" fill="#FFFFFF" fillRule="nonzero" x="404" y="96" width="167" height="26" rx="6"></rect>
						                                <path d="M429,144 L650,144 L650,170 L429,170 C425.686292,170 423,167.313708 423,164 L423,150 C423,146.686292 425.686292,144 429,144 Z" id="Rectangle-2-Copy-11" fill="#FFFFFF" fillRule="nonzero"></path>
						                                <path d="M131,48 L487,48 C490.865993,48 494,51.1340068 494,55 L494,67 C494,70.8659932 490.865993,74 487,74 L131,74 C127.686292,74 125,71.3137085 125,68 L125,54 C125,50.6862915 127.686292,48 131,48 Z" id="Rectangle-2-Copy-2" fill="#FFFFFF" fillRule="nonzero"></path>
						                                <path d="M101,144 L380,144 C383.313708,144 386,146.686292 386,150 L386,164 C386,167.313708 383.313708,170 380,170 L101,170 C97.6862915,170 95,167.313708 95,164 L95,150 C95,146.686292 97.6862915,144 101,144 Z" id="Rectangle-2-Copy-9" fill="#FFFFFF" fillRule="nonzero"></path>
						                                <path d="M233,192 L512,192 C515.313708,192 518,194.686292 518,198 L518,212 C518,215.313708 515.313708,218 512,218 L233,218 C229.686292,218 227,215.313708 227,212 L227,198 C227,194.686292 229.686292,192 233,192 Z" id="Rectangle-2-Copy-14" fill="#FFFFFF" fillRule="nonzero"></path>
						                                <path d="M173,230 L650,230 L650,256 L173,256 C169.686292,256 167,253.313708 167,250 L167,236 C167,232.686292 169.686292,230 173,230 Z" id="Rectangle-2-Copy-17" fill="#FFFFFF" fillRule="nonzero"></path>
						                            </g>
						                            <path d="M343,0 L651,0 C653.209139,2.84217094e-14 655,1.790861 655,4 L655,14 C655,16.209139 653.209139,18 651,18 L343,18 L35,18 C32.790861,18 31,16.209139 31,14 L31,4 C31,1.790861 32.790861,4.05812251e-16 35,0 L343,0 Z M345,2 L345,16 L651,16 C652.104569,16 653,15.1045695 653,14 L653,4 C653,2.8954305 652.104569,2 651,2 L345,2 Z" id="segment" fill="#A5ADB6" fillRule="nonzero"></path>
						                            <circle id="restore_handle" fill="#007AFF" fillRule="nonzero" cx="650" cy="44" r="5"></circle>
						                            <rect id="restore_stem" fill="#007AFF" fillRule="nonzero" x="649" y="46" width="2" height="362"></rect>
						                        </g>
						                    </animated.g>
						                </animated.g>
														}
													</Spaces>
												</g>
												<Cursor native state={this.state.transition}>
													{({opacity,y}) =>
														<animated.g id="fingers_vertical" style={{
															opacity: opacity,
														}}
														transform={interpolate([y], y => `translate(333.000000, ${260 + y})`)} fill="#FF9500" fillRule="nonzero">
																<circle id="Finger_2" cx="26" cy="26" r="26"></circle>
																<circle id="Finger_1" cx="108" cy="26" r="26"></circle>
														</animated.g>
													}
												</Cursor>
												<CursorHorizontal native state={this.state.transition}>
													{({opacity,x}) =>
														<animated.g id="fingers_horizontal" style={{
															opacity: opacity,
														}}
														transform={interpolate([x], x => `translate(${374 + x}, 219.000000)`)} fill="#FF9500" fillRule="nonzero" >
																<circle id="Finger_2" cx="26" cy="26" r="26"></circle>
																<circle id="Finger_1" cx="26" cy="108" r="26"></circle>
														</animated.g>
													}
												</CursorHorizontal>
				            </g>
				        </g>
				    </g>
				</svg>
			</VisibilitySensor>
		);
	}
  }

export default CSSModules(GesturesDemo, styles);
