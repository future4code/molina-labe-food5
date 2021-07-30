<<<<<<< HEAD
import React from 'react'

export default function SingUp () {
    return (
      <div>
          Cadastro
      </div>
    );
}
=======
import React, { useEffect } from 'react'
import { ScreenContainer, LogoImage, H1} from './styled'
import logo from '../../assets/logoeats.png'
import SignUpFormAdress from '../EnderecoPage/AdressForm'


import SignUpForm from './SignUpForm'

const Signup = () => {
  useEffect(() => {
    document.title = "Cadastro de usuário";
  })

  return (
    <ScreenContainer>
     
      <LogoImage src={logo} />
      <H1>Cadastrar</H1>
      <SignUpForm/>
       
    </ScreenContainer>
  );
}

export default Signup
>>>>>>> master
