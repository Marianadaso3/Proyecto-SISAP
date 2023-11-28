/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import '../css/contacto.css';

function Contacto() {
  return (
    <div data-testid="test-contacts" id="contacto" className="secciones">
      <div className="fondo-incidentes">

        <div className="container">
          <div className="titulos">
            <div className="icono">
            <img src="img/contacto.png" style={{ width: '100px', height: '100px' }}></img>
            </div>
            <div className="">
              <p className="texto-titulo">
                -
                <span className="mi">CONTACTACTANOS</span>
                -
              </p>
            </div>

          </div>

          <div className="informacion">

            <div className="redes-sociales">
              <a className="red" data-testid="test-linked" href="https://www.linkedin.com/company/sisap/"><i className="fa-brands fa-linkedin fa-2x" /></a>
              <a className="fa-solid fa-globe fa-2x" data-testid="test-web" href="https://www.sisap.com/our-culture/"><i className="black" /></a>
              <a className="red" data-testid="test-mail" href="mailto:proyectosisap.2023@gmail.com"><i className="fa-solid fa-envelope fa-2x" /></a>
              

            </div>

            <div className="escribeme">Envianos un Mensaje</div>

            <div className="row">
              <form data-testid="test-formulario" className="formulario">
                <input type="text" placeholder="nombre" className="input" />
                <input type="email" placeholder="correo Electronico" className="input" />
                <input type="text" placeholder="telefono" className="input" />
                <textarea type="text" placeholder="mensaje" className="textarea" />
                <input type="submit" className="submit" />

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Contacto;
