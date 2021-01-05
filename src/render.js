import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, addMessage, updateNewPost } from './redux/state';

export let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App 
                state={state}
                addPost={addPost}
                addMessage={addMessage}
                updateNewPost={updateNewPost}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
