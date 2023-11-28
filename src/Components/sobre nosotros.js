/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import '../css/sobre nosotros.css';

function SobreNosotros() {
  return (
    <div id="sobre-Nosotros" className="container secciones">
      <div className="titulos">
        <div className="icono">
          <img src="img/logo.jpeg" style={{ width: '100px', height: '100px' }}></img>
        </div>
        <div className="">
          <p className="texto-titulo">
            -SOBRE
            <span className="mi">NOSOTROS</span>
            - 
          </p>
        </div>
      
      </div>

      <div className="row informacion">
        <div className="col-lg-4 foto">
        <img src="img/programadores.webp" style={{ width: '400px', height: '510px', marginTop: '-520px'}}></img>
          <div className="sobre">
            <p className="nombre">Integrantes de ISYK</p>
            <p className="puesto">Programadores:</p>
            <p className="puesto">Mariana David</p>
            <p className="puesto">Ronny Juárez</p>
            <p className="puesto">José William Vargas</p>
          </div>
        </div>

        <div className="col-lg-4">
          <p className="sub">Pagina Web de Ciberseguridad</p>
          <p className="texto-largo">Brinda información, marcos y estrategias de ciberseguridad.</p>
          <p className="texto-largo">Proporcionará recursos, guías y listas de verificación de seguridad.</p>
          <p className="texto-largo">Asegurando una solución completa y efectiva para abordar la creciente amenaza de ciberataques y la falta de conciencia en ciberseguridad</p>
        </div>
        <div className="col-lg-4">
          <p className="texto-largo">
            {' '}
            <span className="resaltado">
              {' '}
            </span>
          </p>
          <p className="texto-largo">
            {' '}
            <span className="resaltado">
              {' '}
              Mariana David
            </span>
            <br />
            <i className="fa-solid fa-phone" />
            {' '}
            +502 30110780
            <br />
            <i className="fa-solid fa-envelope" />
            {' '}
            natydaso3@hotmail.com
            <br />
            <i className="fa-brands fa-linkedin" />
            {' '}
            https://www.linkedin.com/in/mariana-david-a61013282/
            <br />
            <i className="fa-brands fa-github" />
            {' '}
            https://github.com/Marianadaso3
          </p>
          <p className="texto-largo">
            {' '}
            <span className="resaltado">
              {' '}
              Ronny Juárez
            </span>
            <br />
            <i className="fa-solid fa-phone" />
            {' '}
            +505 81932354
            <br />
            <i className="fa-solid fa-envelope" />
            {' '}
            ronnyjuarez1996@gmail.com
            <br />
            <i className="fa-brands fa-github" />
            {' '}
            https://github.com/RonnyJuarez
          </p>
          <p className="texto-largo">
            {' '}
            <span className="resaltado">
              {' '}
              William Vargas
            </span>
            <br />
            <i className="fa-solid fa-phone" />
            {' '}
            +505 58338279
            <br />
            <i className="fa-solid fa-envelope" />
            {' '}
            vjosewilliam@gmail.com
            <br />
            <i className="fa-brands fa-linkedin" />
            {' '}
            https://www.linkedin.com/in/jose-william-vargas-249947126/
            <br />
            <i className="fa-brands fa-github" />
            {' '}
            https://github.com/josewill
          </p>
        </div>

      </div>

    </div>

  );
}

export default SobreNosotros;
