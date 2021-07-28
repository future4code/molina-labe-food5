import React from 'react'
import Router from './routes/Router'
import { BrowserRouter } from 'react-router-dom'

//img
import LogoEats from './assets/logoeats.png'
import GarfinhEats from './assets/garfinho-logo.png'

//styled
import { LogoEatsImg , GarfinhoLogoImg } from './styled'

export default function App () {
  return (
    <BrowserRouter>
{/*       <GarfinhoLogoImg>
      <img src={GarfinhEats} />
      </GarfinhoLogoImg>
      <LogoEatsImg>
      <img src={LogoEats} />
      </LogoEatsImg> */}
      <Router />
    </BrowserRouter>
  );
}