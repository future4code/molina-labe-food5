import React from 'react'
import { Switch, Route } from 'react-router-dom'
/*Page*/
import SplashScreen from '../pages/TelaAberturaPage/TelaAbertura'
import LoginPage from '../pages/LoginPage/Login'
import SingUp from '../pages/SingUpPage/Singup'
import HomePage from '../pages/HomePage/Home'
import CartPage from '../pages/CarrinhoPage/Carrinho'
import RestaurantDetails from '../pages/DetalheRestPage/Restaurante'
import Profile from '../pages/PefilPage/Perfil'
import AdressPage from '../pages/EnderecoPage/AdressPage'
import ErrorPage from '../pages/ErrorPage/Error'

export default function Router() {
    return(
        <Switch>
            <Route exact path={'/'}>
                <SplashScreen />
            </Route>
            <Route exact path={'/entrar'}>
                <LoginPage />
            </Route>
            <Route exact path={'/cadastro'}>
                <SingUp />
            </Route>
            <Route exact path={'/cadastro/endereco'}>
                <AdressPage/>
            </Route>
            <Route exact path={'/home'}>
                <HomePage />
            </Route>
            <Route exact path={'/restaurante/:id'}>
                <RestaurantDetails />
            </Route>
            <Route exact path={'/carrinho'}>
                <CartPage />
            </Route>
            <Route exact path={'/perfil'}>
                <Profile />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    )
}