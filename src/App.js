import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import { theme } from './components/Theme';
import Header from './components/UI/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello!
    </ThemeProvider>
  );
}

export default App;
