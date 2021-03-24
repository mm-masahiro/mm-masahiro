import axios from 'axios';
import React, { useState } from 'react';

export const News = () => {

	interface News {
		title: string
	}

	const [newsTitle, setNewsTitle] = useState([])

	const getNews = () => {
		axios
		.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ad9a3b9e852c4fbebb12f66e2adb2ee6')
		.then(response => {
			// const title = response.data.articles[0].title
			// console.log(title)
			setNewsTitle(response.data.articles[0].title)
			console.log(setNewsTitle)
		})
		.catch(() => {
			console.log('error')
		})
	}

	return (
		<div>
			<h1>News</h1>
			<div>
				<button onClick={() => getNews()}>get news</button>
			</div>
			<div>
				
			</div>
		</div>
	)
}
