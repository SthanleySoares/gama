import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home';
import './styles.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#c9a86b',
    },
  },
  typography: {
    subtitle1: {
      color: '#c9a86b!important',
    }
  }
})

root.render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
);
