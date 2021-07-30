import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';


/*Contexts*/
import { GlobalStateContext } from "../../global/GlobalStateContext";

/*Hooks Customizados*/
import useProtectedPage from '../../hooks/useProtectedPage';

/*Components*/
import HeaderRestaurant from "../../components/Header/Header"
import LoadingGif from '../../components/LoadingGif/LoadingGif';
import CardProduto from '../../components/RestaurantCard/ProdutoCard';

/*Tags styleds*/
import { Details, DeliverySpace, ResLogo } from './styled'

export default function RestaurantPage() {
      document.title = "Labe Eats | Restaurantes"
  
      useProtectedPage()
  
      const params = useParams()
      const { restaurantDetail, getRestaurantDetails } = useContext(GlobalStateContext)
  
      useEffect(() => {
          getRestaurantDetails(params.id)
      }, [])
  
      const productsList = restaurantDetail.restaurant && restaurantDetail.restaurant.products.map((product) => {
          return (
  
              <CardProduto
                  product={product}
                  restaurantId={params.id}
                  key={Math.random()}
              />
          )
      })
  
      if (restaurantDetail.restaurant) {
          return (
              <div>
                  <HeaderRestaurant />
                  <Details>
                      <ResLogo src={restaurantDetail.restaurant.logoUrl} />
                      <h3>{restaurantDetail.restaurant.name}</h3>
                      <p>{restaurantDetail.restaurant.description}</p>
                      <DeliverySpace>
                          <p>{restaurantDetail.restaurant.deliveryTime} min</p>
                          <p>Frete R${restaurantDetail.restaurant.shipping}</p>
                      </DeliverySpace>
                      <p>{restaurantDetail.restaurant.address}</p>
                      {productsList && productsList}
                  </Details>
              </div>
          )
      } else {
          return (
              <LoadingGif />
          )
      }
  
  
}
