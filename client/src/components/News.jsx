import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchArticles } from './../actions';

const Articles = styled.ul`
  width: 100%;
  height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.li`
  width: 50%;
  height: 5%;
  margin: 0.3em 0;
  box-shadow: 1px 2px 0.5px grey;
  background-color: whitesmoke;
  text-align: center;
`;

class News extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchArticles());
  }

  render() {
    const [articles] = this.props.articles;
    return (
      <Articles>
        <h2>Articles</h2>
        {articles &&
          articles.map((article, index) => (
            <Card key={index}>
              <div>
                <h3>{article.author}</h3>
                <p>{article.subreddit_name_prefixed}</p>
                <a href={article.permalink} />
              </div>
            </Card>
          ))}
      </Articles>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

export default connect(mapStateToProps)(News);
