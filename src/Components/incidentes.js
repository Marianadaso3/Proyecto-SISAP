/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import '../css/incidentes.css';

function Incidentes() {
  const [porcentaje] = useState({
    creatividad: '90%',
    liderazgo: '70%',
    interpersonal: '90%',
    equipo: '80%',
    ingles: '85%',
    profesionalismo: '95%',
  });
  useEffect(() => {
    const verificador = (entries) => {
      if (entries[0]) {
        let numero1 = 0;
        let numero2 = 0;
        let numero3 = 0;

        const Porcentajes1 = setInterval(() => {
          numero1 += 5;

          document.querySelector('.html').textContent = String(numero1);

          if (numero1 === 65) { // numero de los porcetajes corriendo Ransomeware
            clearInterval(Porcentajes1);
          }
        }, 100);

        const Porcentajes2 = setInterval(() => {
          numero2 += 5;

          document.querySelector('.css').textContent = String(numero2);

          if (numero2 === 90) { // numero de los porcetajes corriendo Phising
            clearInterval(Porcentajes2);
          }
        }, 100);

        const Porcentajes3 = setInterval(() => {
          numero3 += 5;

          document.querySelector('.js').textContent = String(numero3);

          if (numero3 === 95) { // numero de los porcetajes corriendo Error Humano
            clearInterval(Porcentajes3);
          }
        }, 100);
      }
    };

    const observer = new IntersectionObserver(verificador, { rootMargin: '-30% 0px -70% 0px' });
    const incidentes = document.querySelector('#incidentes');

    observer.observe(incidentes);
  }, {});

  return (
    <div id="incidentes" className="secciones">
      <div className="fondo-incidentes">

        <div className="container">
          <div className="titulos">
            <div className="icono">
            <img src="img/logo.jpeg" style={{ width: '100px', height: '100px' }}></img>
            </div>
            <div className="">
              <p className="texto-titulo">
                -LOS
                {' '}
                <span className="mi">INCIDENTES</span>
                -
              </p>
            </div>

          </div>

           {/* Nuevo div con título y párrafo */}
           {/* ... (Código existente) */}
<div className="seccion-adicional">
  <div className="imagen-seccion">
    <img src="img/ciberseguridad.jpg" alt="Ciberseguridad" />
  </div>
  <div className="contenido-seccion">
    <h2>Ciberseguridad: Protegiendo la Información en un Mundo Conectado</h2>
    <p>
      La ciberseguridad se ha convertido en un aspecto crítico en la era digital, donde la información es un activo invaluable y las amenazas cibernéticas son cada vez más sofisticadas. Proteger datos sensibles, la integridad de los sistemas y la privacidad del usuario es esencial en cualquier entorno digital.
    </p>
    <p>
      En un panorama donde los incidentes de ciberseguridad son una realidad cotidiana, es fundamental entender las amenazas y adoptar prácticas de seguridad robustas. Algunas de las áreas clave en ciberseguridad incluyen:
    </p>
    <ul>
      <li><strong>Ransomware:</strong> Este tipo de ataque implica el cifrado de datos y la demanda de un rescate para su liberación. La prevención y la respuesta rápida son esenciales.</li>
      <li><strong>Phishing:</strong> Ataques que buscan engañar a los usuarios para revelar información confidencial. La conciencia y la educación son herramientas cruciales para combatir el phishing.</li>
      <li><strong>Error Humano:</strong> A menudo subestimado, los errores humanos pueden abrir puertas a vulnerabilidades. La capacitación constante del personal es clave.</li>
    </ul>
    <p>
      Además, la ciberseguridad no solo se trata de tecnología, sino también de la cultura organizacional. Fomentar una cultura de seguridad, implementar políticas claras y mantenerse actualizado con las últimas amenazas son pasos esenciales en la protección contra incidentes cibernéticos.
    </p>
    <p>
      En un mundo donde la tecnología avanza rápidamente, la ciberseguridad es un compromiso continuo. La detección temprana, la respuesta efectiva y la prevención proactiva son elementos clave para garantizar la seguridad en línea en todos los niveles.
    </p>
  </div>
</div>
{/* ... (Resto del código) */}


          <div className="informacion">
            <div className="porcentaje">
              <div className="cont row">
                <div className="card col-lg-4">
                  <div className="box col-lg-4">
                    <div className="porcent">
                      <svg>
                        <circle cx="70" cy="70" r="70" />
                        <circle cx="70" cy="70" r="70" />
                      </svg>
                      <div className="number">
                        <h2>
                          <span className="html">41</span>
                          <span>%</span>
                        </h2>
                      </div>
                      <h4 className="text">Ransomware</h4>
                    </div>
                  </div>
                </div>

                <div className="card col-lg-4">
                  <div className="box">
                    <div className="porcent">
                      <svg>
                        <circle cx="70" cy="70" r="70" />
                        <circle cx="70" cy="70" r="70" />
                      </svg>
                      <div className="number">
                        <h2>
                          <span className="css">48</span>
                          <span>%</span>
                        </h2>
                      </div>
                      <h3 className="text">Phishing</h3>
                    </div>
                  </div>
                </div>

                <div className="card col-lg-4">
                  <div className="box">
                    <div className="porcent">
                      <svg>
                        <circle cx="70" cy="70" r="70" />
                        <circle cx="70" cy="70" r="70" />
                      </svg>
                      <div className="number">
                        <h2>
                          <span className="js">96</span>
                          <span>%</span>
                        </h2>
                      </div>
                      <h3 className="text">Error Humano</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col">
                <div className="incidentes">
                  <p className="porcentaje-barra a" style={{ width: porcentaje.creatividad }}>Aumento de ataque 67%</p>
                </div>
                <div className="incidentes">
                  <p className="porcentaje-barra b" style={{ width: porcentaje.liderazgo }}>Brechas de seguridad 60%</p>
                </div>
                <div className="incidentes">
                  <p className="porcentaje-barra c" style={{ width: porcentaje.interpersonal }}>Preocupación por la privacidad 70%</p>
                </div>

              </div>

              <div className="col-lg-6 col-incidentes">
                <div className="incidentes">
                  <p className="porcentaje-barra d" style={{ width: porcentaje.equipo }}>Costos de ciberataques 10%</p>
                </div>
                <div className="incidentes">
                  <p className="porcentaje-barra e" style={{ width: porcentaje.ingles }}>Ataques basados en la nube 45%</p>
                </div>
                <div className="incidentes">
                  <p className="porcentaje-barra f" style={{ width: porcentaje.profesionalismo }}>Escasez de talento en ciberseguridad 25%</p>
                </div>

              </div>
            </div>

          </div>

        </div>
        <div className="contratar">
          <p className="texto-contratar">Descargar Informe</p>
          <div className="botones-contratar">
            <a href="documentos/INFORME.pdf" className="descargar-curriculum bg-primary" download="INFORME.pdf">Descargar(.PDF)</a>
          </div>

        </div>

      </div>

    </div>

  );
}

export default Incidentes;
