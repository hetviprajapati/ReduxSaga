import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';

import Reducer from './Reducer';
import RootSaga from './Sagas/RootSaga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = 
    typeof window==='object' &&  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose ;

const enhanser=composeEnhancer(
    applyMiddleware(sagaMiddleware)
)

const store = createStore(
    Reducer,
    enhanser,
);

sagaMiddleware.run(RootSaga);

ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));