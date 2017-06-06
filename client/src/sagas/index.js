import { take, put, call, fork } from 'redux-saga/effects';
import * as c from './../constants';

const redditUrl = `http://www.reddit.com/r/vim/new.json?sort=new`;
function fetchRedditArticles(url) {
  return fetch(url)
    .then(res => res.json())
    .then(json => json.data.children.map(article => article.data));
}

export function* getArticles() {
  const articles = yield call(fetchRedditArticles, redditUrl);
  try {
    yield put({ type: c.ARTICLES_FETCH_SUCCESS, payload: articles });
  } catch (err) {
    yield put({ type: c.ARTICLES_FETCH_FAIL, payload: err });
  }
}

export default function*() {
  yield fork(getArticles);
}
