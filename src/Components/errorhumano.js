/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import '../css/error_humano.css';

function ErrorHumano() {
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
    const errorhumano = document.querySelector('#errorhumano');

    observer.observe(errorhumano);
  }, {});

  return (
    <div id="errorhumano" className="secciones">
      <div className="fondo-errorhumano">

        <div className="container">
          <div className="titulos">
            <div className="icono">
            <img src="img/logo.jpeg" style={{ width: '100px', height: '100px' }}></img>
            </div>
            <div className="">
              <p className="texto-titulo">
                -HABLEMOS DEL
                {' '}
                <span className="mi">ERROR HUMANO</span>
                -
              </p>
            </div>

          </div>

           {/* Nuevo div con título y párrafo */}
           {/* ... (Código existente) */}
<div className="seccion-adicional">
  <div className="imagen-seccion">
    <img src="img/error.jpg" style={{ width: '500px', height: '500px' }} alt="error" />
  </div>
  <div className="contenido-seccion">
  <h2>¿Qué es el error humano en la seguridad informática?</h2>
<p>Cuando se habla del error humano en la ciberseguridad, lo que se entiende por el término es ligeramente diferente de su uso en términos más generales.</p>

<p>En el contexto de la seguridad, se entiende por error humano las acciones involuntarias -o la falta de acción- de los empleados y usuarios que provocan, propagan o permiten que se produzca una violación de la seguridad.</p>

<p>Esto abarca una amplia gama de acciones -desde la descarga de un archivo adjunto infectado con malware hasta no utilizar una contraseña segura-, lo cual es en parte la razón por la que puede ser tan difícil de abordar.</p>

<p>Con nuestros entornos de trabajo cada vez más avanzados y complicados, tenemos un número creciente de herramientas y servicios que utilizamos, y tenemos nombres de usuario y contraseñas y otras cosas que recordar para cada uno de ellos. Todo esto se acumula, y cuando no se proporcionan soluciones alternativas y seguras, los empleados empiezan a tomar atajos para hacerse la vida más fácil.</p>

<p>Por si esto no fuera suficiente para que los usuarios finales se esfuercen por tomar las medidas adecuadas, también tienen que lidiar con la amenaza constante de los ciberdelincuentes que influyen en sus decisiones. La ingeniería social tiene un papel cada vez más importante en todo tipo de violaciones de la seguridad, y se utiliza para explotar la capacidad de los empleados de entregar datos o credenciales directamente en manos de los malos actores sin que tengan que escribir una sola línea de un programa malicioso o un exploit de software.</p>
<h2>Tipos de error humano</h2>

<p>Aunque las posibilidades de error humano son casi infinitas, pueden clasificarse en dos tipos diferentes: errores basados en la habilidad y errores basados en la decisión. La diferencia entre estos dos se reduce esencialmente a si la persona tenía o no los conocimientos necesarios para realizar la acción correcta.</p>

<p><strong>Errores basados en la habilidad</strong></p>
<p>El error humano basado en la habilidad consiste en deslices y lapsus: pequeños errores que se producen al realizar tareas y actividades conocidas. En estos casos, el usuario final sabe cuál es la acción correcta, pero no la lleva a cabo debido a un lapsus temporal, un error o una negligencia. Esto puede ocurrir porque el empleado está cansado, no presta atención, está distraído o tiene un breve lapsus de memoria.</p>

<p><strong>Errores basados en la decisión</strong></p>
<p>Los errores de decisión se producen cuando un usuario toma una decisión errónea. Puede haber varios factores que influyan en ello: a menudo se trata de que el usuario no tenga el nivel de conocimientos necesario, no tenga suficiente información sobre la circunstancia concreta o ni siquiera se dé cuenta de que está tomando una decisión por su inacción.</p>

<p>Reducir los errores humanos con una formación eficaz en materia de seguridad.</p>
<p>Descubre cómo usecure ayuda a las empresas a impulsar un comportamiento seguro con una formación de concienciación sobre ciberseguridad automatizada de forma inteligente, que a tus empleados les encantará.</p>
<h2>Ejemplos de errores humanos en las empresas</h2>

<p>El error humano puede perjudicar la seguridad de tu empresa de un número casi interminable de maneras diferentes, pero algunos tipos de error son más frecuentes que los demás. Veamos algunos de estos errores tan comunes.</p>
 
<p><strong>Envío erróneo</strong></p>
<p>El envío erróneo -enviar algo a un destinatario equivocado- es una amenaza común para la seguridad de los datos corporativos. Según el informe de filtraciones de 2018 de Verizon, el envío erróneo fue la quinta causa más común de todas las filtraciones de ciberseguridad. Con muchas personas que confían en funciones como la autosugestión en sus clientes de correo electrónico, es fácil que cualquier usuario envíe accidentalmente información confidencial a la persona equivocada si no tiene cuidado.</p>

<p><strong>Problemas con las contraseñas</strong></p>
<p>Los humanos y las contraseñas simplemente no se llevan bien. Los datos del informe de 2019 del Centro Nacional de Ciberseguridad arrojan una imagen nefasta: 123456 sigue siendo la contraseña más popular del mundo, y el 45% de las personas reutiliza la contraseña de su cuenta de correo electrónico principal en otros servicios. Además de no crear contraseñas fuertes y únicas, los usuarios sin formación cometen muchos otros errores con las contraseñas, como anotarlas en notas adhesivas en sus monitores o compartirlas con sus compañeros.</p>

<p><strong>Parches</strong></p>
<p>Los ciberdelincuentes buscan siempre nuevos exploits en el software. Cuando se descubren los exploits, los desarrolladores de software se apresuran a corregir la vulnerabilidad y a enviar el parche a todos los usuarios antes de que los ciberdelincuentes puedan comprometer a más usuarios. Por eso es esencial que los usuarios instalen las actualizaciones de seguridad en sus ordenadores tan pronto como estén disponibles.</p>

<p><strong>Errores de seguridad física</strong></p>
<p>Aunque las filtraciones de datos se atribuyen con mayor frecuencia a los ciberataques, las empresas también están expuestas a las amenazas físicas. La información confidencial y las credenciales pueden ser robadas o vistas por personas no autorizadas si acceden a locales seguros.</p>
<h2>Cómo evitar los errores humanos en tu empresa</h2>

<p>El error humano sólo puede producirse cuando hay una oportunidad que lo permita, por lo que es esencial eliminar las oportunidades de error en la medida de lo posible. Al mismo tiempo, los usuarios finales seguirán cometiendo errores si no saben cómo actuar correctamente y cuáles son los riesgos. Para superar esta brecha, es esencial abordar el error humano desde ambos lados para crear una defensa integral para tu empresa.</p>

<p><strong>Reducir las oportunidades</strong></p>
<p>Cambiar las prácticas de trabajo, las rutinas y las tecnologías para reducir sistemáticamente las oportunidades de error es la mejor manera de comenzar los esfuerzos de mitigación. Aunque la forma de conseguirlo dependerá de las actividades y entornos específicos de tu empresa, existen algunas pautas comunes para mitigar las oportunidades de error humano.</p>

<p><strong>Cambiar la cultura</strong></p>
<p>Una cultura centrada en la seguridad es fundamental para reducir los errores humanos. En una cultura de seguridad, la seguridad se tiene en cuenta en cada decisión y acción, y los usuarios finales buscarán y discutirán activamente los problemas de seguridad cuando los encuentren.</p>

<p><strong>Abordar la falta de conocimientos con formación</strong></p>
<p>Si bien es esencial reducir las oportunidades de error, también hay que abordar las causas de error desde un ángulo humano. Educar a tus empleados en los fundamentos de la seguridad y en las mejores prácticas les permite tomar mejores decisiones, y les permite tener la seguridad en mente y buscar más ayuda cuando no están seguros de cuáles son las consecuencias de una determinada acción.</p>

  </div>
</div>
{/* ... (Resto del código) */}

</div>
        <div className="contratar">
          <p className="texto-contratar">Descargar Información Sobre Error Humano</p>
          <div className="botones-contratar">
        
            <a href="documentos/error.pdf" className="descargar-curriculum bg-primary" download="error.pdf">Descargar(.PDF)</a>
          </div>

        </div>

      </div>

    </div>

  );
}

export default ErrorHumano;
