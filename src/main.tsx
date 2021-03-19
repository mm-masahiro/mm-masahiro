import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Test } from './component/test'

const App = () => {
	return (
		<div>
			<h1>Hello World!!!!!!!!</h1>
			<div>
				<Test name="Hoge" />
			</div>
		</div>
	)
}

ReactDOM.render(<App/>, document.querySelector('#app'));
