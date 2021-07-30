import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { Container, Filter } from './styled'
import { goToRestaurantDetails } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import useProtectedPage from '../../hooks/useProtectedPage'
import RestaurantCard from '../../components/RestaurantCard/RestauranteCard'
import HomeInitial from '../../assets/logotelaabertura.png'
import Footer from '../../components/Footer/Footer'
import { TextField } from '@material-ui/core'

export default function HomePage() {
  document.title = "Labe Eats | Página Inicial";
  const history = useHistory()
  const { restaurants, getRestaurants } = useContext(GlobalStateContext)
  const [itensInFilter, setItensInFilter] = useState([])
  const [searchFilter, setSearchFilter] = useState([])
  const [isFiltred, setFiltred] = useState(false)

  useProtectedPage()
  useEffect(() => {
  getRestaurants()
  }, [])

  const verDetalhe = (id) => {
    goToRestaurantDetails(history, id)
  }

  const chooseFilter = (category) => {
    restaurants.filter(choosed => {
      if (choosed.category === category) {
        setItensInFilter([choosed])
        setFiltred(true)
      }
      return true
    })
  }

  const getSearched = (event) => {
    const searchList = []
    const word = event.target.value
    for (let i = 0; i < restaurants.length; i++) {
      if (restaurants && restaurants[i].name.toLowerCase() === word.toLowerCase()) {
        searchList.push(restaurants[i])
      }
    }
    setSearchFilter(searchList)
  }

  const searchList = searchFilter.length && searchFilter.map((rest) => {
    return (
      <div onClick={() => verDetalhe(rest.id)} key={rest.id}>
        <RestaurantCard
          restaurants={rest}
        />
      </div>
    )
  })
  const restaurantFilter = itensInFilter.length && itensInFilter.map((item) => {
    return (
      <div onClick={() => verDetalhe(item.id)} key={item.id}>
        <RestaurantCard
          restaurants={item}
        />
      </div>
    )
  })

  const showRestaurants = restaurants && restaurants.map((rest) => {
    return (
      <div onClick={() => verDetalhe(rest.id)} key={rest.id}>
        <RestaurantCard
          restaurants={rest}
        />
      </div>
    )
  })
  if (!restaurants[0].logoUrl) {
    return (
      <HomeInitial />
    )
  }
  return (
    <div>
      <TextField
        placeholder="&#128269; Pesquisar Restaurante"
        type="text"
        fullWidth
        variant="outlined"
        name="search"
        onChange={getSearched}
      />
      <Filter>
        <p onClick={() => setFiltred(false)}>Tudo</p>
        {restaurants && restaurants.map((result) => {
          return <p id={result.id} onClick={() => chooseFilter(result.category)} key={Math.random()}>{result.category}</p>
        })}
      </Filter>
      <Container>
        {searchFilter.length > 0 ? searchList :
          isFiltred ? <div style={{ width: "95%", margin: "0 auto" }}>{restaurantFilter}</div> : 
          <div style={{ width: "95%", margin: "0 auto" }}>{showRestaurants}</div>
        }
      </Container>
      <Footer
        history={history}
      />
    </div>
  )
}
