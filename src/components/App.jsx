import React from 'react';
import '../scss/App.scss';
import TitleGenerator from './TitleGenerator';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h3>Great Turtle Title Generator</h3>
				<TitleGenerator />
			</header>
		</div>
	);
}

export default App;
