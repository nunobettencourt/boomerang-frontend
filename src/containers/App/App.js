import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Homepage from '../homepage/Homepage';
import Results from '../results/Results';

const App = () => (
	<Router>
		<div className="App">
			<main>
				<Switch>
					<Route path="/results">
						<Results />
					</Route>
					<Route path="/">
						<Homepage />
					</Route>
				</Switch>
			</main>
		</div>
	</Router>
);

export default App;
