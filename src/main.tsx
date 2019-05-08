import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MyNumberBrowserContainer } from './components';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { reducers } from './reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(sagaMiddleware),
    window["__REDUX_DEVTOOLS_EXTENSION__"]
      ? window["__REDUX_DEVTOOLS_EXTENSION__"]()
      : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <>
      <MyNumberBrowserContainer />
    </>
  </Provider>,
  document.getElementById('root'));
