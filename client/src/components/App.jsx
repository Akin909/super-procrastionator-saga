import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import styled from 'styled-components';
import './reset.js';

import rootSaga from './../sagas';
import rootReducer from './../reducers';
import News from './News.jsx';
import NavBar from './NavBar.jsx';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWrapper>
          <NavBar />
          <News />
        </AppWrapper>
      </Provider>
    );
  }
}

export default App;
