import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Router from '../routes/Router';
/*Contexts*/
import GlobalState from "../global/GlobalState";
import { GlobalStyled } from '../constants/styledGlobal'
/*Tema*/
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../constants/theme';
/*Components*/
import Header from '../components/Header';
import FooterNav from '../components/FooterNav';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled>
        <GlobalState>
          <BrowserRouter>
            <Route exact path={['/cadastro', '/cadastro/endereco', '/home', '/carrinho', '/perfil']}>
              <Header />   
            </Route>       
            <Router />
            <FooterNav/>
          </BrowserRouter>
        </GlobalState>
      </GlobalStyled>
    </ThemeProvider>
  );
}

