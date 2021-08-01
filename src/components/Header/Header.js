import React from "react";
import { Route, useHistory } from "react-router-dom";

/*Material UI*/
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

/*Cordenador de rota*/
import { goBack } from "../../router/coordinator";


export default function Header() {
  const history = useHistory();

     return (
          <HeaderContainer>
                    <Bar>
                         <ArrowBackIosIcon size={24} onClick={() => goBack(history)} />
                    </Bar>
                    <Bar>
                         <Title></Title>
                    <Route exact path={"/home"}>
                         <Title>FutureEats</Title>
                    </Route>
                    <Route exact path={"/restaurante/:id"}>
                         <Title>Restaurante</Title>
                    </Route>
                    <Route exact path={"/carrinho"}>
                         <Title>Carrinho</Title>
                    </Route>
                    <Route exact path={"/perfil"}>
                         <Title>Perfil</Title>
                    </Route>
                    </Bar>
          </HeaderContainer>
     );
}
