import React from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

import App from './components/App';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    line-height: 1;
  }
  html {
    font-size: 14px;
    @media (min-width: 1600px) {
      font-size: 16px;
  }
}
`;

render(
  <React.StrictMode>
    <Normalize />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (module.hot) {
  module.hot.accept();
}
