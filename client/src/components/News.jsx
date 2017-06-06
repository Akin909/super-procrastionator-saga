import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchArticles, saveArticle } from './../actions';

const Articles = styled.ul`
  width: 100%;
  height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content:center;
`;

const Card = styled.li`
  width: 20em;
  height: 20em;
  margin: 1em;
  box-shadow: 1px 2px 0.5px grey;
  background-color: whitesmoke;
  text-align: center;
`;

const SaveButton = styled.button`
  width: 6em;
  height: 3em;
  margin: 0 0 1em 0;
`;

const CardTitle = styled.h2`
  margin: 0;
  padding: 0.5em;
  height: 30%;
  overflow: scroll;
  text-overflow: ellipsis;
`;

const CardAuthor = styled(CardTitle)`
  height: 10%;
`;

const CardDetails = styled.article`
  margin: 0;
  padding: 0.5em;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ArticleLink = styled.a`
  display:block;
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
    console.log('articles', articles);
    console.log('saved', this.props.saved);
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
