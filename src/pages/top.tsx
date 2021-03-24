import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

export const Top = () => {
	return (
		<div>
			<header className="main--header">
				<ul className="main--header__list">
					<li className="main--header__list-title">Home</li>
					<li className="main--header__list-title">
						<Link to='/news'>
							{/* <button>News</button> */}
							News
						</Link>
					</li>
					<li className="main--header__list-title">Tips</li>
				</ul>
			</header>
		</div>
	)
}
