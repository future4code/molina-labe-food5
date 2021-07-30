import React from "react";
//import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
//import { CardContent } from '@material-ui/core';
//import { CardMedia } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
//import { makeStyles } from "@material-ui/core/styles";




  export default function FoodCard(props) {
    return (
      <div>
        <img src={props.photoUrl} />
  
        <div>
          <div gutterBottom variant="h5" component="h2">
            {" "}
            {props.name}{" "}
          </div>
          <Typography variant="body2" color="textSecondary" component="p">
            {" "}
            {props.description}{" "}
          </Typography>
  
          <div>
            <p>R$ {props.price && props.price.toFixed(2)}</p>
            <p>x {props.quantity && props.quantity} units</p>
            <CardActions>
              <button onClick={props.onClickButtonRemove}>
                {props.nameButton === "add" ? "Adicionar" : "Remover"}
              </button>
            </CardActions>
          </div>
        </div>
      </div>
    );
  }
  