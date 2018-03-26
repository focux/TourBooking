import { injectGlobal } from 'styled-components';

/* eslint-disable */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,700');

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

  html {
    font-size: 62.5%;
}

  body {
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
}
`;
