import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Student, Test } from './component/test'
import { Tick } from './component/tick';

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
		<div>
			<h1>Hello World!!!!!!!!</h1>
			<div>
				{/* <Test name="Hoge" /> */}
				<Test school='kasaoka' addres='Okayama' />
				{book.title}
			</div>
			<div>
				{sings.map(sing => (
					<div key={sing.id}>
						I often listen {sing.title}
					</div>
				))}
			</div>
			<div>
				{/* <Tick /> */}
			</div>
		</div>
	)
}

ReactDOM.render(<App/>, document.querySelector('#app'));

