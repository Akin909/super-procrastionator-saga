import React from 'react';
import { Articles, Card, CardTitle, CardDetails, ArticleLink } from './styled';
import { connect } from 'react-redux';

const Scrapings = ({ scrapings }) => {
  const jobsAndNews = [].concat(...scrapings);
  const jobs = jobsAndNews[0];
  return (
    <Articles>
      {jobs &&
        jobs.map((info, index) => (
          <Card key={index}>
            <CardDetails>
              <CardTitle>{info.data}</CardTitle>
              <ArticleLink href={info.link}> Link to Story</ArticleLink>
            </CardDetails>
          </Card>
        ))}
    </Articles>
  );
};

const mapStateToProps = ({ scrapings }) => {
  return {
    scrapings
  };
};
export default connect(mapStateToProps)(Scrapings);
