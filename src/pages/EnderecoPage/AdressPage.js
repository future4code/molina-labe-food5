import React, { useEffect } from 'react'
import { ScreenContainer, LogoImage, H1} from './styled'
import logo from '../../assets/logoeats.png'
import AdressForm from '../EnderecoPage/AdressForm'




const AdressPage = () => {
  useEffect(() => {
    document.title = "Cadastro de usuário";
  })

  return (
    <ScreenContainer>
     
      <LogoImage src={logo} />
      <H1>Meu endereço</H1>
      <AdressForm/>
       
    </ScreenContainer>
  );
}

export default AdressPage