import * as c from './../constants';

export function fetchArticles() {
  return {
    type: c.FETCH_ARTICLES
  };
}

export function receiveArticles() {
  return {
    type: c.RECEIVE_ARTICLES,
    payload: articles
  };
}
