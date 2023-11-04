import React from 'react';

import Nav from './Components/nav';
import Carousel from './Components/carousel';
import SobreNosotros from './Components/sobre nosotros';
import Proyectos from './Components/proyectos';
import Habilidades from './Components/habilidades';
import Contacto from './Components/contacto';

function StartApp() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <Nav />
      <Carousel />
      <SobreNosotros />
      <Proyectos />
      <Habilidades />
      <Contacto />

    </div>

  );
}

export default StartApp;
