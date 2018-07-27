import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from 'components/ScrollToTop'



ReactDOM.render(
	<BrowserRouter>
		<ScrollToTop>
			<App />
		</ScrollToTop>
	</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
