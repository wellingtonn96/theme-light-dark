import React from 'react';

import Home from './pages/Home'
import { AppProvider } from './hooks/App'
import GlobalStyles from './styles/global'

function App() {

  return (
    <AppProvider>
      <GlobalStyles />
      <Home />
    </AppProvider>
  );
}

export default App;