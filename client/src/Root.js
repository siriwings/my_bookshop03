/**
 * Created by siri on 2017-07-01.
 */
//, 여기서 Provider 를 통하여 프로젝트에 리덕스를 연결시킬거다.
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import App from './shared/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import {AUTH_USER} from './actions/types';
import {createLogger} from 'redux-logger';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(reduxThunk, logger)(createStore);

const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');

if (token) {
    //we need to update application state
    store.dispatch({type: AUTH_USER});
}

const Root = () => (
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
);

export default Root;