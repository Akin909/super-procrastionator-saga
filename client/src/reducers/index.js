import { combineReducers } from 'redux';
import * as c from './../constants';

export function articles(state = [], action) {
  switch (action.type) {
    case c.ARTICLES_FETCH_SUCCESS:
      return [...state, action.payload];
    case c.ARTICLES_FETCH_FAIL:
      return [...state, action.payload];
    default:
      return state;
  }
}

export function scrapings(state = [], action) {
  switch (action.type) {
    case c.SCRAPE_FAILURE:
    case c.SCRAPE_SUCCESS:
      return [...state, action.payload];
    default:
      return state;
  }
}

export function saved(state = [], action) {
  switch (action.type) {
    case c.SAVE_ARTICLE:
      return [...state, action.article];
    default:
      return state;
  }
}

export default combineReducers({
  scrapings,
  articles,
  saved
});
