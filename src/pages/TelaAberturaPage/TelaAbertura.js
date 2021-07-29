import React from 'react';
import logoeats from "../../assets/logotelaabertura.png"
import { SplashScreenContainer } from './styled';
import Loading from "../../components/Loading/Loading"

export default function TelaAbertura () {
    return (
      <SplashScreenContainer>
        <img src={logoeats}/> 
        <Loading/> 
      </SplashScreenContainer>
    );
}