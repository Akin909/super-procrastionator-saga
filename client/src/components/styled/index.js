import styled from 'styled-components';

export const Articles = styled.ul`
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

export const Card = styled.li`
  width: 20em;
  height: 20em;
  margin: 1em;
  box-shadow: 1px 2px 0.5px grey;
  background-color: whitesmoke;
  text-align: center;
`;
export const CardTitle = styled.h2`
  margin: 0;
  padding: 0.5em;
  height: 30%;
  overflow: scroll;
  text-overflow: ellipsis;
`;

export const CardAuthor = styled(CardTitle)`
  height: 10%;
`;

export const CardDetails = styled.article`
  margin: 0;
  padding: 0.5em;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ArticleLink = styled.a`
  display:block;
`;
