/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import '../css/ingenieriaSocial.css';

function IngenieriaSocial() {
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
    const ingenieriaSocial = document.querySelector('#ingenieriaSocial');

    observer.observe(ingenieriaSocial);
  }, {});

  return (
    <div id="ingenieriaSocial" className="secciones">
      <div className="fondo-ingenieriaSocial">

        <div className="container">
          <div className="titulos">
            <div className="icono">
            <img src="img/logo.jpeg" style={{ width: '100px', height: '100px' }}></img>
            </div>
            <div className="">
              <p className="texto-titulo">
                -HABLEMOS DE
                {' '}
                <span className="mi">Ingenieria Social</span>
                -
              </p>
            </div>

          </div>

           {/* Nuevo div con título y párrafo */}
           {/* ... (Código existente) */}
<div className="seccion-adicional">
  <div className="imagen-seccion">
    <img src="img/ingenieria.jpg" style={{ width: '500px', height: '500px' }} alt="ingenieria" />
  </div>
  <div className="contenido-seccion">
   <h2>Ingeniería social: definición</h2>
   <p>La ingeniería social es una técnica utilizada por atacantes informáticos para manipular a las personas y obtener información confidencial o acceso a sistemas informáticos. En lugar de explotar vulnerabilidades técnicas, se aprovecha de la psicología humana y la interacción social.</p>
   <p>Los ingenieros sociales suelen emplear estrategias persuasivas, como la manipulación emocional, la suplantación de identidad o la creación de escenarios convincentes para engañar a las víctimas y obtener información sensible, contraseñas o acceso a sistemas corporativos.</p>
   <p>Esta forma de ataque se basa en la confianza, el engaño y la manipulación, y puede ocurrir a través de diferentes medios, como correos electrónicos, llamadas telefónicas, mensajes de texto o interacciones en redes sociales.</p>
    <h2>Cómo funciona la ingeniería social y cómo protegerte</h2>
    <p>Casi todos los tipos de ataques conllevan algún tipo de ingeniería social. Por ejemplo, están los clásicos correos electrónicos de "phishing" y estafas de virus, con un gran contenido social. Los correos electrónicos de phishing intentan convencer a los usuarios de que su origen es legítimo con la esperanza de obtener información personal o datos de la empresa, por insignificante que parezcan. Por otra parte, los correos que contienen archivos adjuntos con virus a menudo aparentan provenir de contactos confiables u ofrecen contenido multimedia que parece inofensivo, como videos "divertidos" o "tiernos".</p>

    <p>En algunos casos, los atacantes utilizan métodos más simples de ingeniería social para acceder a una red o computadora. Por ejemplo, un hacker puede frecuentar el comedor público de un gran edificio de oficinas, buscar usuarios que estén trabajando en sus tablets o computadoras portátiles y mirar los dispositivos por encima de su hombro. Con esta táctica pueden conseguir una gran cantidad de contraseñas y nombres de usuario, todo sin necesidad de ni enviar un solo correo electrónico ni escribir una línea de código de virus.</p>

    <p>Otros ataques requieren una comunicación real entre el atacante y la víctima; en estos casos, el atacante presiona al usuario para que le otorgue acceso a la red con el pretexto de un problema grave que es necesario resolver de inmediato. Los atacantes utilizan en igual medida la rabia, la culpa y la tristeza para convencer a los usuarios de que necesitan su ayuda y no pueden negársela.</p>

    <p>Para terminar, es importante prestar atención a la ingeniería social como un medio para crear confusión. Numerosos trabajadores y consumidores no se dan cuenta de que, con solo un poco de información (como el nombre, la fecha de nacimiento o la dirección), los hackers pueden acceder a múltiples redes haciéndose pasar por usuarios legítimos o miembros del personal de TI. Después de lograrlo, les resulta fácil restablecer contraseñas y obtener acceso prácticamente ilimitado.</p>

    <p>La protección contra la ingeniería social comienza con la educación; los usuarios necesitan aprender que no deben hacer nunca clic en enlaces sospechosos y siempre deben proteger sus credenciales de inicio de sesión, incluso en la oficina y en el hogar. Sin embargo, si las tácticas sociales logran su objetivo, el resultado probable es una infección por malware. Para combatir los rootkits, troyanos y otros bots, es fundamental implementar una solución de seguridad de Internet de alta calidad que sea capaz de eliminar infecciones y rastrear su origen.</p>
    
    <p>Casi todos los tipos de ataques conllevan algún tipo de ingeniería social. Por ejemplo, están los clásicos correos electrónicos de "phishing" y estafas de virus, con un gran contenido social. Los correos electrónicos de phishing intentan convencer a los usuarios de que su origen es legítimo con la esperanza de obtener información personal o datos de la empresa, por insignificante que parezcan. Por otra parte, los correos que contienen archivos adjuntos con virus a menudo aparentan provenir de contactos confiables u ofrecen contenido multimedia que parece inofensivo, como videos "divertidos" o "tiernos".</p>

<h2>¿Cómo podemos protegernos de la ingeniería social?</h2>
<p>No entregues datos personales a personas extrañas por teléfono, correos electrónicos o redes sociales.</p>

<p>Configurá la privacidad en las redes sociales para que no queden expuestos tus datos personales.</p>

<p>Informate y aprendé sobre este tipo de amenazas.</p>

<p>Usá una contraseña segura.</p>

<p>Configurá la autenticación en dos pasos para estar alerta de accesos indebidos a tus cuentas.</p>

<p>Prestá atención a cualquier persona que te pida información personal.</p>

  </div>
</div>
{/* ... (Resto del código) */}
</div>
        <div className="contratar">
          <p className="texto-contratar">Descargar Información Sobre Ingenieria Social</p>
          <div className="botones-contratar">
        
            <a href="documentos/ingenieria.pdf" className="descargar-curriculum bg-primary" download="ingenieria.pdf">Descargar(.PDF)</a>
          </div>

        </div>

      </div>

    </div>

  );
}
export default IngenieriaSocial;
