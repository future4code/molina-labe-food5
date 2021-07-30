import React from "react";
import garfinho from "../../assets/garfinho-logo.png";
import logoeats from "../../assets/logoeats.png";
import { useHistory } from "react-router-dom";
import {goToHome, goToProfile} from "../../routes/coordinator"

const Footer = () => {
  const history = useHistory();

  return (
    <div >
      <div >
        <img src={garfinho} onClick={goToHome} />
      </div>
      
      
      <div >
        <img src={logoeats} onClick={goToProfile} />
      </div>
    </div>
  );
};

export default Footer;
