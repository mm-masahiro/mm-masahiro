import React from 'react';

type Props = {
	name: string
}

export interface Student {
	id: number,
	name: string,
	height: number
}

interface SchoolProps {
	school: string,
	addres: string,
}

export const Test = (props : SchoolProps) => {
	return (
		<div>
			<div>
				<p>test</p>
				{/* <p>{props.name}</p> */}
			</div>
			<div>
				<div>
					{props.school}
				</div>
			</div>
		</div>
	)
}

// export default Test
