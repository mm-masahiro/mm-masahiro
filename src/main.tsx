import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Test } from './component/test'
import { Tick } from './component/tick';

const App = () => {
	const book = {
		title: 'The Diamond of Ace',
		author: 'Terasima'
	}

	const sings = [
		"out of the blue",
		"I see",
		"Sing out"
	]
	return (
		<div>
			<h1>Hello World!!!!!!!!</h1>
			<div>
				<Test name="Hoge" />
				{book.title}
			</div>
			<div>
				{sings.map(sing => (
					<p>I often listen {sing}</p>
				))}
			</div>
			<div>
				<Tick />
			</div>
		</div>
	)
}

ReactDOM.render(<App/>, document.querySelector('#app'));

