import React from 'react';
import Router from './routes/Router'
/*Contexts*/
import GlobalState from "./global/GlobalState";
/*Tema*/
import { ThemeProvider } from '@material-ui/core/styles'
import theme from "./constants/theme"

export default function App () {
  return (
    <ThemeProvider theme={theme}>
        <GlobalState>
          <Router />
        </GlobalState>
    </ThemeProvider>
  );
}