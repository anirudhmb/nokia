import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter,Route} from 'react-router-dom';
import {Switch} from 'react-router';

ReactDOM.render(<Login />, document.getElementById('root'));

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path = "/login" component = {Login} />
			<Route path = "/dashboard" component = {Dashboard} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
