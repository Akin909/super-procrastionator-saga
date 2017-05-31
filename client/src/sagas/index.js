import { take, put, call, fork } from 'redux-saga/effects';
import * as c from './../constants';

const redditUrl = ` http://www.reddit.com/search.json?q=vim`;
function fetchRedditArticles(url) {
  return fetch(url)
    .then(res => res.json())
    .then(json => json.data.children.map(article => article.data));
}

export function* getArticles() {
  const articles = yield call(fetchRedditArticles, redditUrl);
  yield put({ type: c.RECEIVE_ARTICLES, payload: articles });
}

export default function*() {
  yield fork(getArticles);
}
