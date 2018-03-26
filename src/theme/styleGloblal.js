import { injectGlobal } from 'styled-components';

/* eslint-disable */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,500');

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
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
}
`;
