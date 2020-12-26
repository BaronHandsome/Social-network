import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
	{
		id: 1,
		message: 'Post 1'
	},
	{
		id: 2,
		message: 'Post 2'
	},
	{
		id: 3,
		message: 'Post 3'
	},
	{
		id: 4,
		message: 'Post 4'
	},
	{
		id: 5,
		message: 'Post 5'
	},
	{
		id: 6,
		message: 'Post 6'
	},
	{
		id: 7,
		message: 'Post 7'
	},
	{
		id: 8,
		message: 'Post 8'
	},
	{
		id: 9,
		message: 'Post 9'
	},
	{
		id: 10,
		message: 'Post 10'
	},
	{
		id: 11,
		message: 'Post 11'
	},
	{
		id: 12,
		message: 'Post 12'
	},
];

let dialogs = [
	{
		id: 1,
		name: 'User 1'
	},
	{
		id: 2,
		name: 'User 2'
	},
	{
		id: 3,
		name: 'User 3'
	},
	{
		id: 4,
		name: 'User 4'
	},
	{
		id: 5,
		name: 'User 5'
	}
];

let messages = [
	{
		id: 1,
		message: 'Hi'
	},
	{
		id: 2,
		message: 'Sup'
	},
	{
		id: 3,
		message: 'Hello'
	},
	{
		id: 4,
		message: 'Yo'
	},
	{
		id: 5,
		message: 'Hi'
	}
];

ReactDOM.render(
	<React.StrictMode>
		<App
			posts={posts}
			dialogs={dialogs}
			messages={messages}
		/>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
