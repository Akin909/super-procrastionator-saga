import * as c from './../constants';

export function fetchArticles() {
  return {
    type: c.FETCH_ARTICLES
  };
}

export function receiveArticles() {
  return {
    type: c.ARTICLES_FETCH_SUCCESS,
    payload: articles
  };
}

export function saveArticle(article) {
  return {
    type: c.SAVE_ARTICLE,
    article
  };
}
