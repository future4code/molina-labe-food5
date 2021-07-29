import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
/*imagens*/
import logoeats from "../../assets/logoeats.png"
/*Componentes*/
import Loading from '../../components/Loading/Loading'
/*Cordenador de rotas */
import {goToHome} from '../../routes/coordinator';
/*Tags styleds*/
import { SplashScreenContainer } from './styled';


export default function TelaAbertura () {
  const history = useHistory()

  useEffect(() => {
    setTimeout(() => {
      goToHome(history)
    }, 4000)
  }, [history])

    return (
      <SplashScreenContainer>
        <img src={logoeats}/>
        <Loading />  
      </SplashScreenContainer>
    );
}