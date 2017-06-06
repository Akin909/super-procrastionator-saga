import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchArticles, saveArticle } from './../actions';
import {
  Articles,
  ArticleLink,
  Card,
  CardTitle,
  CardAuthor,
  CardDetails
} from './styled';

const SaveButton = styled.button`
  width: 6em;
  height: 3em;
  margin: 0 0 1em 0;
`;

class News extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchArticles());
  }

  saveOffline(article) {
    const { dispatch } = this.props;
    localStorage.setItem(article.title, JSON.stringify(article));
    dispatch(saveArticle(article.title));
  }

  render() {
    const [articles] = this.props.articles;
    return (
      <Articles>
        {articles &&
          articles.map((article, index) => (
            <Card key={index}>
              <CardDetails>
                <CardTitle>{article.title}</CardTitle>
                <CardAuthor>{article.author}</CardAuthor>
                <ArticleLink href={article.url}>
                  Read The Full Story
                </ArticleLink>
                <SaveButton onClick={() => this.saveOffline(article)}>
                  {this.props.saved.some(saved => saved === article.title)
                    ? 'Saved'
                    : 'Save'}
                </SaveButton>
              </CardDetails>
            </Card>
          ))}
      </Articles>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
    saved: state.saved
  };
}

export default connect(mapStateToProps)(News);
