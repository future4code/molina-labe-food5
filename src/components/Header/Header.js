import React from 'react';
import { Route, useHistory } from 'react-router-dom';

/*Material UI*/
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

/*Cordenador de rota*/
import { goBack } from '../../routes/coordinator';
/* styled */
import {HeaderContainer, Bar, Title } from './styled'

export default function Header() {
     const history = useHistory()

     return (
          <HeaderContainer>
               <Bar>
                    <Route exact path={['/cadastro', '/restaurante/:id', '/cadastro/endereco', '/carrinho']}>
                         <ArrowBackIosIcon size={24} onClick={() => goBack(history)} />
                    </Route>
               </Bar>
               <Bar>
                    <Route exact path={['/entrar', 'cadastrar', '/cadastro/endereco']}>
                         <Title></Title>
                    </Route>
                    <Route exact path={'/home'}>
                         <Title>FutureEats</Title>
                    </Route>
                    <Route exact path={'/restaurante/:id'}>
                         <Title>Restaurante</Title>
                    </Route>
                    <Route exact path={'/carrinho'}>
                         <Title>Carrinho</Title>
                    </Route>
                    <Route exact path={'/perfil'}>
                         <Title>Perfil</Title>
                    </Route>
               </Bar>
          </HeaderContainer>

     );
}