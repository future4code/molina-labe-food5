<<<<<<< HEAD
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
=======
import React from "react";
import garfinho from "../../assets/garfinho-logo.png";
import logoeats from "../../assets/logoeats.png";
import { useHistory } from "react-router-dom";
import {goToHome, goToProfile} from "../../routes/coordinator"

const Footer = () => {
  const history = useHistory();

  return (
    <div >
      <div >
        <img src={garfinho} onClick={goToHome} />
      </div>
      
      
      <div >
        <img src={logoeats} onClick={goToProfile} />
      </div>
    </div>
  );
};

export default Footer;
>>>>>>> master
