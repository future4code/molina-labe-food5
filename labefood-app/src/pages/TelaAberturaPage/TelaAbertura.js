import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

//rotas
import { goToHome } from '../../routes/coordinator'

//img
import { LogoTela } from '../../assets/logotelaabertura.png'
//components
import Loading from '../../components/Loading/Loading'

//styled
import { SplashScreenContainer, LoadingContainer } from './styled';

export default function SplashScreen() {
    const history = useHistory()

    useEffect(() => {
        setTimeout(() => {
            goToHome(history)
        }, 4000)
    }, [history])

    return(
        <SplashScreenContainer>
            <img src={LogoTela} />
            <LoadingContainer>
                <Loading />
            </LoadingContainer>
        </SplashScreenContainer>
    )
}