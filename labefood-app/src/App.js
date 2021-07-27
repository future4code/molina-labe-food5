import React from 'react';
import LogoEats from './assets/logoeats.png'
import GarfinhEats from './assets/garfinho-logo.png'
import { LogoEatsImg , GarfinhoLogoImg } from './styled'

export default function App () {
  return (
    <div>
      <GarfinhoLogoImg>
      <img src={GarfinhEats} />
      </GarfinhoLogoImg>
      <LogoEatsImg>
      <img src={LogoEats} />
      </LogoEatsImg>
    </div>
  );
}