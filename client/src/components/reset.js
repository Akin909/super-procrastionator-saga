import { injectGlobal } from 'styled-components';

//eslint-disable-next-line
export default injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box
  }

  a {
    color: black;
    text-decoration: none;
  }

  * {
   box-sizing: inherit
   margin: inherit;
   padding: inherit;
   font-family: Helvetica;
  }
`;
