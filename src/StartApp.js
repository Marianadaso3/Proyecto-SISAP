import React from 'react';
import Nav from './Components/nav';
import Carousel from './Components/carousel';
import SobreNosotros from './Components/sobre nosotros';
import Proyectos from './Components/proyectos';
import Incidentes from './Components/incidentes';
import Contacto from './Components/contacto';

function StartApp() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <Nav />
      <Carousel />
      <SobreNosotros />
      <Proyectos />
      <Incidentes />
      <Contacto />

    </div>

  );
}

export default StartApp;
