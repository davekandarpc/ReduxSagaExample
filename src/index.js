import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render, ReactDOM } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './reducers';
import App from './components/App';
import rootSaga from './sagas';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
  	<Router>
    	<App />
   	</Router>
  </Provider>,
  document.getElementById('root'),
);

