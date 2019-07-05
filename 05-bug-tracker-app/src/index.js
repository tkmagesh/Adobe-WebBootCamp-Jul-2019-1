import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import { bindActionCreators } from 'redux';

import * as bugActionCreators from './bugTracker/actions';
import { spinnerActionCreators } from './spinner';

import appStore from './store';

import BugTracker from './bugTracker';
import { Spinner } from './spinner';


var bugActionDispatchers = bindActionCreators(bugActionCreators, appStore.dispatch);
let spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, appStore.dispatch);

function renderApp(){
	let storeState = appStore.getState(),
		bugs = storeState.bugsData,
		spinnerValue = storeState.spinnerData;

	ReactDOM.render(
		<>
			<Spinner value={spinnerValue} {...spinnerActionDispatchers}/>
			<hr/>
			<BugTracker bugs={bugs} {...bugActionDispatchers} />
		</>,
		document.getElementById('root'));
}
renderApp();
appStore.subscribe(renderApp);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
