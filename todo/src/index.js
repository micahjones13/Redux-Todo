import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import add from './reducers';

const store = createStore(add); //put reducer here

ReactDOM.render(
    <Provider store = {store}>
        <App /> 
    </Provider>,
    document.getElementById('root'));


