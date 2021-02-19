import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light'

import GlobalStyle from './styles/global'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={light}>
    <GlobalStyle />
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
