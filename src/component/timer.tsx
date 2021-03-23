import React, { useState } from 'react';

interface AppState {
	timeLeft: number
}

export const Timer = () => {
	let [limit, setLimit] = useState(60);

	const start = () => {
		setInterval(countDown, 1000)
	}

	const countDown = () => {
		setLimit(limit -1)
		limit = limit -1
		console.log(limit)
	}

	return (
		<div>
			<div>
				{limit}
			</div>
			<button>Stop</button>
			<button onClick={start}>Start</button>
		</div>
	)


}
