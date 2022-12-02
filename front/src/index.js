import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';

import CssBaseline from '@mui/material/CssBaseline';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

const mdTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 540,
      md: 780,
      lg: 960,
      xl: 1140,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

