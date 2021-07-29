import React from 'react';
import logoeats from "../../assets/logotelaabertura.png"
import { SplashScreenContainer } from './styled';


export default function TelaAbertura () {
    return (
      <SplashScreenContainer>
        <img src={logoeats}/>  
      </SplashScreenContainer>
    );
}