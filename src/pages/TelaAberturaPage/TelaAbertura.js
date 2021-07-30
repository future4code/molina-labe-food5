import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
/*Componentes*/
import HomeInitial from '../HomePage/HomeInitial'
/*Cordenador de rotas */
import {goToHome , goToLogin } from '../../routes/coordinator';



export default function TelaAbertura () {
  document.title = "Labe Eats"
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token")
    setTimeout(() => {
      if (token === null) {
        goToLogin(history)
      } else {
          goToHome(history)
        }
    }, 1000)
  }, [])

  return (
    <HomeInitial />
  )
}
