import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Student, Test } from './component/test'
import { Tick } from './component/tick';
import { Counter } from './component/counter'
import { Timer } from './component/timer';
import './style/main.scss'

const App = () => {
	const book = {
		title: 'The Diamond of Ace',
		author: 'Terasima'
	}

	const students: Student[] = [
		{
			id: 1,
			name: 'masa',
			height: 170
		},
		{
			id: 2,
			name: 'masa2',
			height: 175
		},
		{
			id: 3,
			name: 'masa3',
			height: 180
		},
	]

	const sings = [
		{
			id: 1,
			title: 'out of the blue'
		},
		{
			id: 2,
			title: 'I see'
		},
		{
			id: 3,
			title: 'Sing out'
		}
	]
	return (
		<div className="main">
			<header className="main--header">
				<ul className="main--header__list">
					<li className="main--header__list-title">Home</li>
					<li className="main--header__list-title">News</li>
					<li className="main--header__list-title">Tips</li>
				</ul>
			</header>
		</div>
	)
}

ReactDOM.render(<App/>, document.querySelector('#app'));

