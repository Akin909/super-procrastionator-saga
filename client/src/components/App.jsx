import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import styled from 'styled-components';

import rootSaga from './../sagas';
import rootReducer from './../reducers';
import News from './News.jsx';
import NavBar from './NavBar.jsx';
import Saved from './Saved.jsx';
import './reset.js';

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
      <Router>
        <Provider store={store}>
          <AppWrapper>
            <NavBar />
            <Route exact path="/" component={News} />
            <Route path="/saved" component={Saved} />
          </AppWrapper>
        </Provider>
      </Router>
    );
  }
}

export default App;
