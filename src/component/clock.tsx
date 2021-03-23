import React, { useState } from 'react';

type Props = {
	date: Date
}

export const Clock = (props : Props) => {
	const [date, setDate] = useState(0);
	
	return(
		<div>
			<h1>Clock</h1>
			<h2>It is {props.date.toLocaleTimeString}</h2>
		</div>
	)
}

