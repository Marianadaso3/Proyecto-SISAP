import React from 'react';
import Nav from './Components/nav';
import Carousel from './Components/carousel';
import SobreNosotros from './Components/sobre nosotros';
import Proyectos from './Components/proyectos';
import Incidentes from './Components/incidentes';
import Contacto from './Components/contacto';
// Nuevos componentes
import Ransomware from './Components/ransomware';
import Phishing from './Components/phishing';
import ErrorHumano from './Components/errorhumano';
import IngenieriaSocial from './Components/ingenieriasocial';

function StartApp() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <Nav />
      <Carousel />
      <SobreNosotros />
      <Proyectos />
      <Incidentes />
      <Ransomware />
      <Phishing />
      <ErrorHumano />
      <IngenieriaSocial />
      <Contacto />

    </div>

  );
}

export default StartApp;
