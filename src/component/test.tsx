import React from 'react';

type Props = {
	name: string
}

export const Test = (props : Props) => {
	return (
		<div>
			<p>test</p>
			<p>{props.name}</p>
		</div>
	)
}

// export default Test
