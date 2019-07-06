import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

import appStore from './store';

import BugTracker from './bugTracker';
import Spinner from './spinner';

import { Provider } from 'react-redux'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home(){
	return (<h1> My App </h1>);
}
ReactDOM.render(
	<Provider store={appStore}>
		<Router>
			<React.Fragment>
				<div>
					<span> <Link to="/">Home</Link> </span>
					<span> <Link to="/spinner/"> Spinner </Link></span>
					<span> <Link to="/bugs/"> Bug Tracker </Link></span>
				</div>
				<Route path="/" exact component={Home}/>
				<Route path="/spinner/" exact component={Spinner}/>
				<Route path="/bugs/" exact component={BugTracker}/>
			</React.Fragment>
		</Router>
	</Provider>,
	document.getElementById('root'));






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
