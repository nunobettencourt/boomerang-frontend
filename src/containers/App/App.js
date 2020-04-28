import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Homepage from '../homepage/Homepage';

const App = () => (
	<Router>
		<div className="App">
			<Switch>
				<Route path="/">
					<Homepage />
				</Route>
			</Switch>
		</div>
	</Router>
);

export default App;
