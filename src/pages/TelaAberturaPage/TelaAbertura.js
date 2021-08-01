import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

/*Cordenador de rotas */
import {goToHome} from '../../routes/coordinator';

/*imagens*/
import LogoImg from '../../assets/small-logo-white.png';

/*Componentes*/
import Loading from '../../components/Loading/Loading';

/*Tags styleds*/
import {
  SplashScreenContainer,
  Logo,
  LoadingContainer
} from './styled';

export default function SplashScreen() {
  const history = useHistory()

  useEffect(() => {
    setTimeout(() => {
      goToHome(history)
    }, 4000)
  }, [history])

  
  return (
    <SplashScreenContainer>
      <Logo src={LogoImg}/>
      <LoadingContainer>
        <Loading />
      </LoadingContainer>
    </SplashScreenContainer>
  );
}