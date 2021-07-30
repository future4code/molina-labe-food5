import React from 'react';
import { FooterContainer, IconImg } from './styled'
import { goToProfile, goToHome, goToCart } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import home from '../../assets/home_cinza.svg'
import cart from '../../assets/cart_cinza.svg'
import avatar from '../../assets/avatar_cinza.svg'
import homeGreen from '../../assets/home_verde.svg'
import cartGreen from '../../assets/cart_verde.svg'
import avatarGreen from '../../assets/avatar_verde.svg'


export default function Footer() {
    const history = useHistory();

    return (
        <FooterContainer>
            <IconImg src={history.location.pathname === "/pagina-inicial" ? homeGreen : home}
                alt="home"
                onClick={() => goToHome(history)}
            />

            <IconImg src={history.location.pathname === "/carrinho" ? cartGreen : cart }
                alt="cart"
                onClick={() => goToCart(history)} 
            />

            <IconImg src={history.location.pathname === "/perfil" ? avatarGreen : avatar}
                alt="avatar"
                onClick={() => goToProfile(history)} 
            />
        </FooterContainer>
    )
}
