/*
 * @Author: ZJ 
 * @Date: 2018-04-16 13:55:02 
 * @Last Modified by: ZJ
 * @Last Modified time: 2018-04-27 17:42:18
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider  } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import reducer from './store/reducer/index';

const reduxDevTools = window.devToolsExtension;

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk, logger),reduxDevTools())
)

ReactDOM.render(
    <Provider  store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
