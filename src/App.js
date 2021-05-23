import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Buttons from "./components/Buttons";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import women from "./components/women.jpg"

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className="Main">
          <img id='women' src={women}></img>
          <p>
          <b>Bienvenida al Estudio de Ciudadanía Sexual de la mujer peruana</b><br></br><br></br>
Gracias por su interés de participar en este estudio. Por favor, lea la información referente al estudio
que se encuentra a continuación:<br></br><br></br> 
<b>¿Quién conduce este estudio y de que se trata?</b><br></br>
Estefanía Simich, candidata a doctorado en Sexualidad Humana en el centro de estudios California
Institute of Integral Studies (CIIS) ubicado en San Francisco, California, está conduciendo un estudio de
investigación sobre la conceptualización de la ciudadanía sexual de las mujeres migrantes peruanas. La
investigación actual sobre la ciudadanía sexual de las mujeres migrantes es limitada. Por lo tanto, esta
investigación tiene como objetivo honrar las experiencias migratorias y la visión de las mujeres que
participan en este estudio de investigación. La participación en este estudio proporcionará información
valiosa en el campo de la sexualidad huma y al concepto de ciudadanía sexual.<br></br><br></br>
<b>¿Cuál es el propósito del estudio?</b><br></br>
Este estudio explorará la conceptualización de la ciudadanía sexual de mujeres peruanas migrantes
residentes en los Estados Unidos. Se define la ciudadanía sexual como el acceso a los derechos sexuales,
la libre expresión de la sexualidad y deseo sexual. Debido a la escasez de este tipo de estudios, se
identificó la necesidad de explorar más este concepto.
La pregunta propuesta de esta tesis es: ¿Cómo las experiencias migratorias de la mujer migrante
peruana impactan el debate sobre su acceso a la ciudadanía sexual como migrantes en los Estados
Unidos? Las preguntas de investigación para este estudio exploran las experiencias de ciudadanía sexual
de las mujeres a través de las diferentes fases de su proceso migratorio, como antes de la migración, el
viaje migratorio, la adaptación a un nuevo entorno y el asentamiento en los Estados Unidos. El objetivo
de este estudio es profundizar la comprensión de la ciudadanía sexual de los migrantes y el impacto de
las condiciones nacionales del Perú que impulsan a las personas a irse, así como el posicionamiento
actual de las mujeres migrantes peruanas en los Estados Unidos. Uno de los factores influyentes a
considerarse es el neoliberalismo como factor propulsor de la violencia de género durante la migración.
Los datos se recolectarán de entrevistas en profundidad con mujeres peruanas autoidentificadas que
migraron de Perú a Estados Unidos entre los años 1990 y 2020.<br></br><br></br>
<b>¿Qué pasará si decides ser parte del estudio?</b><br></br>
Como persona identificada condicha experiencia, se le invita a participar en este estudio. Esto implicará
la realización de una grabación de audio y video de una entrevista semiestructurada programada a un
tiempo que sea conveniente para usted y para la entrevistadora. La entrevista se realizará en línea a
través de un servicio seguro y encriptado de la plataforma Zoom para garantizar la confidencialidad, la
privacidad, y el anonimato. La entrevista se ha diseñado para durar aproximadamente una hora y como
máximo una hora y media. Durante ese tiempo, se le invitará a hablar en una manera que le resulte
segura y cómoda acerca de sus experiencias como mujer peruana, antes, durante, y después de la
migración. No se requiere preparación de su parte para ninguna parte del proceso.<br></br><br></br>
<b>¿Cuáles son los riesgos de este estudio?</b><br></br>
Antes de aceptar participar, es importante comprender que, si bien este estudio está diseñado para
minimizar riesgos potenciales, la entrevista puede tocar áreas sensibles. En otras palabras, dependiendo
de su historial único con relación al tema, es posible que sienta incomodidad al hablar de situaciones
que le presentaron desafíos. Si tiene alguna inquietud o pregunta antes, durante o después de la
entrevista, la investigadora principal hará todo lo posible por discutirlas, así como informarle de las
opciones para resolver sus inquietudes.<br></br><br></br>

<b>¿Qué hago si experimento sentimientos no deseados a causa de mi participación en el estudio?</b><br></br>
Los siguientes recursos están disponibles a nivel nacional:<br></br>
<ul>
<li>National Sexual Assault Hotline/Línea Nacional de Ayuda por Asalto Sexual: 800-656-HOPE (4673)</li><br></br>
<li>National Suicide Prevention Hotline/Red nacional de Prevención del Suicidio: 1-800-273-8255</li><br></br>
<li>National Domestic Violence Hotline/Línea Nacional sobre Violencia Doméstica: 1-800-799-7233</li><br></br>
</ul><br></br>
Asimismo, puede usar los siguientes recursos para identificar a consejeros profesionales autorizados en
su área:
<ul>
 <li>Psychology Today: <a href='https://www.psychologytoday.com/us/therapists'>https://www.psychologytoday.com/us/therapists</a></li><br></br>
<li>Better Help: <a href='https://www.betterhelp.com'>https://www.betterhelp.com</a></li><br></br>
<li>AASECT (American Association for Sexuality Counselors and Therapists):<br></br>
<a href='https://www.aasect.org/referral-directory'>https://www.aasect.org/referral-directory</a></li><br></br>
</ul><br></br><br></br>
<b>¿Cómo se protegerá mi privacidad?</b> <br></br>
Para la protección de tu privacidad, (el participante) tienes la opción de mantener pública, toda la
información, o toda la información puede mantenerse estrictamente confidencial y tu identidad estará
protegida dentro de los límites de la ley. El procedimiento de investigación ha sido diseñado para no
recopilar identificadores innecesarios, y la información personal se mantendrá separada del cuestionario
y de los datos de la entrevista a menos que tu decidas (participante) no hacerlo. La entrevistadora
(Estefanía Simich) también te pedirá que te abstengas de dar nombres y cuando sea necesario, utilizar
seudónimos al referirse a otras personas en el cuestionario y la entrevista. Solo se utilizarán grabaciones
de audio las cuales se borrarán después de la transcripción. Además, cualquier información de
identificación se eliminará de ambos grupos de datos. Se respetará su solicitud a la investigadora
principal de omitir detalles específicos en la disertación.<br></br><br></br>
Además, cualquier información de identificación se eliminará de ambos grupos de datos. Se respetaré su
solicitud a la investigadora principal de omitir detalles específicos en la disertación. Solo la investigadora
principal, Estefanía Simich, M.A., y la presidenta de su tesis, la Dra. Michelle Marzullo, Ph.D., tendrán
acceso a los datos asociados con este estudio. Los datos electrónicos estarán protegidos con contraseña
y los datos impresos en papel se almacenarán en un área bajo llave a la cual solo la investigadora
principal pueda acceder. Los datos impresos se destruirán dentro de los tres años posteriores a la
finalización de este proyecto de investigación. Para garantizar aún más su privacidad, la investigadora
utilizará identificadores numéricos de toda la información transcripta por terceros. Asimismo, en la
publicación o presentación de los hallazgos no se utilizará información alguna que pueda permitir
identificar personalmente a ninguno de los participantes.<br></br><br></br>
<b>¿Cuáles son los beneficios de participar en este estudio?</b><br></br>
Por su participación, no se ofrece ni se garantiza ningún beneficio directo, incluido cualquier tratamiento
o recompensa monetaria. Si elige participar, su contribución ayudará a aumentar la comprensión sobre
la ciudadanía sexual de las mujeres migrantes peruanas en los Estados Unidos. Con base en las
experiencias de participantes en similares estudios de investigación, espero que la entrevista que
tengamos le brinde una oportunidad grata para la reflexión y la autoexpresión.<br></br><br></br>
<b>¿Cuáles son mis derechos si decido participar?</b><br></br>
<b>Declaración de Derechos del Participante</b><br></br>
Estos son los derechos que les corresponden a todas las personas a las que se les pide que participen en
un estudio de investigación. Como participante de una investigación, tengo los siguientes derechos:<br></br><br></br>

1. Tengo derecho a que me comuniquen qué se intenta averiguar por medio de la investigación.<br></br><br></br> 2.
Tengo derecho a que me comuniquen todos los procedimientos para conducir la investigación, y que me
indiquen si alguno de ellos es diferente del que se utilizaría en la práctica estándar.<br></br><br></br>
3. Tengo derecho a que me comuniquen todos los riesgos, las molestias o los efectos secundarios que
podrían producirse razonablemente como consecuencia de la investigación.<br></br><br></br>
4. Tengo derecho a que me comuniquen los beneficios, si los hay, que puedo esperar razonablemente
de mi participación.<br></br><br></br>
5. Tengo derecho a que me comuniquen las otras opciones que tengo y en qué medida estas pueden ser
mejores o peores que participar en la investigación.<br></br><br></br>
6. Tengo derecho a que me comuniquen el tipo de tratamiento que tendré disponible si se producen
complicaciones a causa de la investigación.<br></br><br></br>
7. Tengo derecho a hacer todas las preguntas que quiera sobre la investigación o el procedimiento.
Puedo hacer estas preguntas antes de que comience la investigación o en cualquier momento durante la
misma.<br></br><br></br>
8. Tengo derecho a negarme a participar en la investigación o a interrumpir mi participación en
cualquier momento. Esta decisión no me afectará de ninguna forma.<br></br><br></br>
9. Tengo derecho a recibir una copia del formulario de consentimiento correspondiente a la
investigación fechado.<br></br><br></br>
10. Tengo derecho a estar libre de toda presión mientras decido si quiero participar en el estudio de
investigación.<br></br><br></br>
<b>¿Qué pasa una ves que presiono/firmo el botón de aceptar participar en el estudio?</b><br></br>
Una ves presione el botón usted estará aceptando participar en este estudio:<br></br>
Yo, la participante doy fe que:<br></br>
•He leído, comprendido, y recibido una copia de este <i>Formulario de Consentimiento Informado,
Declaración de Derechos del Participante, y declaración de Confidencialidad;</i> <br></br>
• He tenido preguntas sobre esta investigación respondidas a mi satisfacción;<br></br>
• Comprendo que mi confidencialidad estará protegida dentro de los límites establecidos por la ley;
• Doy mi consentimiento para participar en este estudio;<br></br>
• Estoy participando de forma libre y voluntaria en esta investigación.<br></br><br></br>
<b>¿Qué hago si tengo preguntas sobre el estudio?</b><br></br>
Si tiene alguna pregunta sobre el estudio puede ponerse en contacto con:<br></br><br></br>
Estefanía Simich<br></br>
Human Sexuality PhD Program<br></br>
California Institute of Integral Studies<br></br>
1453 Mission Street, Room 416San Francisco, California 94103<br></br>
esimich@mymail.ciis.edu<br></br><br></br>
Michelle MarzulloDissertation Chair, Professor/Chair Human Sexuality PhD Program<br></br>
California Institute of Integral Studies<br></br>
1453 Mission Street, Room 416San Francisco, California 94103<br></br>
(415) 575-3406 mmarzullo@ciis.edu<br></br><br></br>
<b>¿Qué hago si tengo preguntas sobre mis derechos como participante de este estudio?</b><br></br>
Además, si en algún momento desea discutir temas relacionados con su contribución en este estudio,
incluyendo preguntas sobre sus derechos como participante, sugerencias sobre cómo minimizar el

riesgo potencial o preocupaciones que le han puesto en riesgo, puede compartir sus inquietudes (de
forma anónima, si así lo desea), con:<br></br>
California Institute of Integral Studies  Coordinator of the Human Research Review Committee<br></br>
1453 Mission Street<br></br>
San Francisco, California 94103<br></br>
hrrcoffice@ciis.edu<br></br><br></br>
La participación en este estudio es completamente voluntaria. Si decide participar, puede negarse a
contestar cualquier pregunta o preguntas, retirar su consentimiento o descontinuar su participación en
cualquier momento y por cualquier motivo sin penalización ni prejuicio. También puede solicitar un
resumen de los hallazgos de la investigación proporcionando su información de contacto a la
investigadora.</p>
        </div>
        <Buttons id='button'/>
      </ThemeProvider>
    </div>
  );
  
}

export default App;
