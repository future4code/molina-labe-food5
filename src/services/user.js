import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToLogin, goToHome, goToAdressPage } from '../routes/coordinator';


export const login = (body, cleanFields, history) => {
    
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("hasAddress", res.data.user.hasAddress)
            if(JSON.parse(localStorage.getItem("hasAddress")) === false){
                goToLogin(history);
            } else {
                goToHome(history);
            }
            cleanFields();
        })
        .catch((err) => {
            console.log(err)
            alert("Erro ao fazer login, tente novamente")
        })
}

export const signUp = (body, cleanFields, history) => {
    
    axios.post(`${BASE_URL}/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("hasAddress", res.data.user.hasAddress)
            cleanFields()
            goToAdressPage(history)
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}

export const AddAdress = ( body,history,cleanFields) => {
    const config = {
        method: 'put',
        url: BASE_URL + "/address",
        headers: { 'auth': localStorage.getItem('token') },
        data: body,
    }

    axios(config)
        .then((res) => {
            localStorage.setItem('token',res.data.token)
            goToHome(history)
            cleanFields()
        })
        .catch((err) => {
            window.alert(err.response.data.message)
        })

}
