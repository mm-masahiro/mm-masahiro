import React from 'react';
import { Clock } from './clock';

export const Tick = () => {
	return(
		<Clock date={new Date()} />		
	)
	setInterval(Tick, 1000);

}
