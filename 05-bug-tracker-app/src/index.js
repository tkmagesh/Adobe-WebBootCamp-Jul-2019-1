import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

import appStore from './store';

import BugTracker from './bugTracker';
import Spinner from './spinner';

import { Provider } from 'react-redux'


import axios from 'axios';

var p = axios.get('http://localhost:3030/bugs');
p.then(function(response){
	console.table(response.data);
});

	ReactDOM.render(
		<Provider store={appStore}>
			<>
				<Spinner/>
				<hr/>
				<BugTracker/>
			</>
		</Provider>,
		document.getElementById('root'));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
