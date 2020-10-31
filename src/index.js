import React, { Fragment } from 'react';
import { render } from 'react-dom';
import App from './app';
import { GlobalStyles } from './global-styles';
import 'normalize.css';
render(
  <Fragment>
    <GlobalStyles />
    <App />
  </Fragment>,
  document.getElementById('root')
);
