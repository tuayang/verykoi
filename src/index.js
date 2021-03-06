import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux' // used to combine redux with react 
import thunk from 'redux-thunk'

// create store and store it in 'store'/ a reducer will be passed in to associate reducer with store

const store = createStore(rootReducer, applyMiddleware(thunk));  // rootreducer is made of auth and blog reducer / applyMiddelware applies many middleware between action and reducer

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
