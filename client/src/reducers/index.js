import { combineReducers } from 'redux';
import * as c from './../constants';

export function articles(state = [], action) {
  switch (action.type) {
    case c.RECEIVE_ARTICLES:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default combineReducers({
  articles
});
