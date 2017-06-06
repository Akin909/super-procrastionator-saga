import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, CardTitle, Articles } from './styled';

const Saved = props => {
  return (
    <Articles>
      {props.saved.length > 0
        ? props.saved.map((article, i) => (
            <Card key={i}><CardTitle>{article}</CardTitle></Card>
          ))
        : <Card><CardTitle>You haven't saved Anything</CardTitle></Card>}
    </Articles>
  );
};

Saved.defaultProps = {
  saved: ['Nothing has been Saved']
};

Saved.propTypes = {
  saved: PropTypes.array
};

const mapStateToProps = state => ({
  saved: state.saved
});

export default connect(mapStateToProps)(Saved);
