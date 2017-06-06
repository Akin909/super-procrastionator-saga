import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveArticle } from './../actions';

import {
  Card,
  CardTitle,
  Articles,
  SaveButton as RetrieveButton
} from './styled';

class Saved extends Component {
  retrieveArticle(title) {
    const article = JSON.parse(localStorage.getItem(title));
    console.log('article', article);
    //this.props.saveArticle(article);
  }
  render() {
    const { saved } = this.props;
    return (
      <Articles>
        {saved.length > 0
          ? saved.map((article, i) => (
              <Card key={i}>
                <CardTitle>{article.title}</CardTitle>
                <RetrieveButton onClick={this.retrieveArticle(article.title)}>
                  Retrieve Article
                </RetrieveButton>
              </Card>
            ))
          : <Card><CardTitle>You haven't saved Anything</CardTitle></Card>}
      </Articles>
    );
  }
}

Saved.defaultProps = {
  saved: ['Nothing has been Saved']
};

Saved.propTypes = {
  saved: PropTypes.array
};

const mapStateToProps = state => ({
  saved: state.saved
});

export default connect(mapStateToProps, { saveArticle })(Saved);
