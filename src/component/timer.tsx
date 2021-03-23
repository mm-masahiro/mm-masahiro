import React, { useState } from 'react';

interface AppState {
	timeLeft: number
}

export const Timer = () => {
	const [limit, setLimit] = useState(60);

	return (
		<div>
			<div>
				{limit}
			</div>
			<button>Stop</button>
			<button>Start</button>
		</div>
	)


}
