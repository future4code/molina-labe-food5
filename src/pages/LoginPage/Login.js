import React, {useState, useLayoutEffect} from "react";
import { LoginPage, LoginForm } from "./styled";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useForm from "../../hooks/useForm";
import axios from "axios";
import logoeats from "../../assets/logoeats.png"
import { BASE_URL } from "../../constants/urls";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { useHistory } from "react-router-dom";
import { goToHome, goToSingnUp } from "../../routes/coordinator";
import TelaAbertura from "../TelaAberturaPage/TelaAbertura";

export default function Login () {
  useUnprotectedPage()

  const history = useHistory()

  const [form, onChange, clear] = useForm({ email : "", password: ""})
  const [loading, setLoading] = useState(false)

  useLayoutEffect(()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000)
    }, [])
  
  const onSubtmitLogin = (event) => {
    event.preventDefault()
    axios.post(`${BASE_URL}/login`, form)

      .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        if(res.data.user.hasAddress){
          goToHome(history)
        }else{
          goToSingnUp(history)
        }
        
      })
      .catch((err) => {
        alert(err.response)
      })
  }
  return (
    <div>
         {loading ? <TelaAbertura/> : 
         <LoginPage>
            <img src={logoeats}/>
            <LoginForm onSubmit={onSubtmitLogin}>
                    <p>Entrar</p>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        fullWidth
                        margin={"normal"}
                        variant={"outlined"}
                        type={"email"}
                        placeholder={"email@email.com"}
                        required
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        margin={"normal"}
                        type={"password"}
                        required
                        fullWidth
                        placeholder={"mínimo 6 caracteres"}
                    />
            <Button
              type={"submit"}
              fullWidth
              variant={"contained"}
              color={"primary"}
            >
              Entrar
            </Button>
            </LoginForm>
            <Button
              type={"submit"}
              fullWidth
              variant={"text"}
              onClick={()=> goToSingnUp(history)}
            >
                  Não possui cadastro? Clique Aqui!
                </Button>
                </LoginPage>}
        </div>
    );
}