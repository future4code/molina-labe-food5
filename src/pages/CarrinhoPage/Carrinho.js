/* import React, { useEffect, useState } from "react";
import { placeOrder } from "../../components/requests/user";
import { useCartCtx } from "../../Contexts/cartCtx";
import { getFullAddress } from "../../components/requests/user";

/* DESIGN 
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import Buttons from "../../components/Buttons";
import Footer from "../../components/Footer/Footer";
import FoodCard from "../../components/FoodCard/FoodCard";
import { useHistory } from "react-router-dom";


const CartPage = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [address, setAddress] = useState([]);
  const { products, setProducts, shipping, restaurantId } = useCartCtx();
  const [payment, setPayment] = useState("");
  const history = useHistory();

  const removeItem = (item) => {
    const newArray = products.filter((pdt) => {
      return pdt.id !== item.id;
    });
    setProducts(newArray);
  };

  const price = products.reduce(function (prev, pdt) {
    return pdt.price * pdt.quantity + prev;
  }, 0);

  const confirmBuy = () => {
    const body = {
      products: products.map((pdt) => {
        return {
          id: pdt.id,
          quantity: pdt.quantity,
        };
      }),

      paymentMethod: payment,
    };
    console.log(body);
    placeOrder(restaurantId, body);
  };

  useEffect(() => {
    setTotalPrice(price);
  }, products);

  useEffect(() => {
    getFullAddress(setAddress);
  }, []);

  const onChangePayment = (event) => {
    setPayment(event.target.value);
  };

  return (
    <div>
      <div>
        <p>Endereço de entrega</p>

        <p>
          {address && address.city}-{address.state}, {address.neighbourhood},
          {address.street}, N°{address.number}, complemento {address.complement}
        </p>
      </div>

      <p>Carrinho vazio</p>

      {/* container teste para receber os produtos }
      {products &&
        products.map((pdt) => {
          return (
            <FoodCard
              photoUrl={pdt.photoUrl}
              name={pdt.name}
              description={pdt.description}
              price={pdt.price}
              quantity={pdt.quantity}
              nameButton="rem"
              onClickButtonRemove={() => removeItem(pdt)}
            />
          );
        })}

      <p>Frete R$ {shipping.toFixed(2)}</p>
      <div>
        <p>SUBTOTAL</p>
        <div>
          R$ {(price + shipping).toFixed(2)}
        </div>
      </div>

      <p>Forma de pagamento</p>
      <div>
        <FormControl component="fieldset" required={true}>
          <RadioGroup name="payment" value={payment} onChange={onChangePayment}>
            <FormControlLabel
              value="money"
              control={<Radio color="black" />}
              label="Dinheiro"
            />
            <FormControlLabel
              value="creditcard"
              control={<Radio color="black" />}
              label="Cartão de crédito"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <Buttons text="CONFIRMAR" onClick={confirmBuy} />
      <Footer />
    </div>
  );
};

export default CartPage;
 */