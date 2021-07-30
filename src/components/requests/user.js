import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { goToAndressPage, goToHome } from "../../routes/coordinator";
import { setOrder } from "../../Contexts/cartCtx";



export const handleLogin = (body, clear, history) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      alert("ok");
      
      localStorage.setItem("token", res.data.token);
      console.log(res.data.token);

      if (res.data.user.hasAddress === false) {
        alert(
          `Olá ${res.data.user.name} você não possui um endereço associado. estamos te redirecionando...`
        );
        goToAndressPage(history);
      } else {
        alert("BEM VINDO");
        goToHome(history);
      }
      clear();
    })
    .catch((error) => {
      alert("deu erro no login");
      console.log(error.response);
    });
};



export const handleAdress = (body, clear, history) => {
  const headers = {
    headers: {
      Auth: localStorage.getItem("token"),
    },
  };

  axios
    .put(`${BASE_URL}/address`, body, headers)
    .then((res) => {
      alert("end criado com sucesso");
      console.log(res.data);
      clear();
    })
    .catch((error) => {
      alert("end deu erro");
      console.log(error.response);
    });
};



export const getProfile = (setProfile) => {
  const headers = {
    headers: {
      Auth: localStorage.getItem("token"),
    },
  };

  axios
    .get(`${BASE_URL}/profile`, headers)
    .then((response) => setProfile(response.data.user))
    .catch((error) => {
      console.log(error.response);
    });
};



export const getRestaurants = (setRestaurants) => {
  const headers = {
    headers: {
      Auth: localStorage.getItem("token"),
    },
  };
  axios
    .get(`${BASE_URL}/restaurants`, headers)
    .then((response) => setRestaurants(response.data.restaurants))
    
    .catch((err) => {
      console.log(err.response);
    });
};


export const getDetailRestaurant = (id, setRestaurant) => {
  const headers = {
    headers: {
      Auth: localStorage.getItem("token"),
    },
  };
  axios
    .get(`${BASE_URL}/restaurants/${id}`, headers)
    .then((response) => setRestaurant(response.data.restaurant))
    .then((res) => {
      
      setRestaurant(res.data.restaurant);
    })
    .catch((err) => {
      console.log(err.response);
    });
};


export const updateProfile = (body, clear, history) => {
  const headers = {
    headers: {
      Auth: localStorage.getItem("token"),
    },
  };
  axios
    .get(`${BASE_URL}/profile`, headers)
    .then((res) => {
      alert("atualizado com sucesso");
      console.log(res.data);
      clear();
      getProfile();
    })
    .catch((error) => {
      alert("deu erro pra atualizar");
      console.log(error.response);
    });
};



export const updateAdress = (body, clear, history) => {
  const headers = {
    headers: {
      Auth: localStorage.getItem("token"),
    },
  };
  axios
    .get(`${BASE_URL}/profile`, headers)
    .then((res) => {
      alert("end atualizado");
      console.log(res.data);
      clear();
      getProfile();
    })
    .catch((error) => {
      alert("deu erro pra atualizar o endereco");
      console.log(error.response);
    });
};

export const placeOrder = (idRestaurant, body) => {
  const headers = {
    headers: {
      Auth: localStorage.getItem("token"),
    },
  };
  axios
    .post(`${BASE_URL}/restaurants/${idRestaurant}/order`, body, headers)
    .then((res) => {
      alert("Pedido confirmado com sucesso!");
      console.log(res.response);
    })
    .catch((err) => {
      alert(err.response.data.message);
      console.log(err.response);
    });
};



export const getActiveOrder = (newOrder) => {
  const headers = {
    headers: {
      Auth: localStorage.getItem("token"),
    },
  };

  axios
    .get(`${BASE_URL}/active-order`, headers)
    .then((res) => {
      console.log(res.data.order);
      newOrder(res.data.order);
    })
    .catch((err) => {
      console.log(err.response);
    });
};


export const getFullAddress = (setAddress) => {
  const headers = {
    headers: {
      Auth: localStorage.getItem("token"),
    },
  };

  axios
    .get(`${BASE_URL}/profile/address`,headers)
    .then((res) => {
      console.log(res.data.address);
      setAddress(res.data.address)
    })
    .catch((res) => {
      console.log(res.response);
    });
};
