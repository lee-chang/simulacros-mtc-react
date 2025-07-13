import ImgQuestion1 from "../images/1.jpg";
import ImgQuestion10 from "../images/10.jpg";
import ImgQuestion11 from "../images/11.jpg";
import ImgQuestion12 from "../images/12.jpg";
import ImgQuestion13 from "../images/13.jpg";
import ImgQuestion14 from "../images/14.jpg";
import ImgQuestion15 from "../images/15.jpg";
import ImgQuestion16 from "../images/16.jpg";
import ImgQuestion17 from "../images/17.jpg";
import ImgQuestion18 from "../images/18.jpg";
import ImgQuestion19 from "../images/19.jpg";
import ImgQuestion2 from "../images/2.jpg";
import ImgQuestion20 from "../images/20.jpg";
import ImgQuestion21 from "../images/21.jpg";
import ImgQuestion22 from "../images/22.jpg";
import ImgQuestion23 from "../images/23.jpg";
import ImgQuestion24 from "../images/24.jpg";
import ImgQuestion25 from "../images/25.jpg";
import ImgQuestion26 from "../images/26.jpg";
import ImgQuestion27 from "../images/27.jpg";
import ImgQuestion28 from "../images/28.jpg";
import ImgQuestion29 from "../images/29.jpg";
import ImgQuestion3 from "../images/3.jpg";
import ImgQuestion30 from "../images/30.jpg";
import ImgQuestion31 from "../images/31.jpg";
import ImgQuestion32 from "../images/32.jpg";
import ImgQuestion33 from "../images/33.jpg";
import ImgQuestion34 from "../images/34.jpg";
import ImgQuestion35 from "../images/35.jpg";
import ImgQuestion36 from "../images/36.jpg";
import ImgQuestion37 from "../images/37.jpg";
import ImgQuestion38 from "../images/38.jpg";
import ImgQuestion39 from "../images/39.jpg";
import ImgQuestion4 from "../images/4.jpg";
import ImgQuestion40 from "../images/40.jpg";
import ImgQuestion41 from "../images/41.jpg";
import ImgQuestion42 from "../images/42.jpg";
import ImgQuestion43 from "../images/43.jpg";
import ImgQuestion44 from "../images/44.jpg";
import ImgQuestion45 from "../images/45.png";
import ImgQuestion46 from "../images/46.jpg";
import ImgQuestion47 from "../images/47.jpg";
import ImgQuestion48 from "../images/48.jpg";
import ImgQuestion49 from "../images/49.jpg";
import ImgQuestion5 from "../images/5.jpg";
import ImgQuestion50 from "../images/50.jpg";
import ImgQuestion51 from "../images/51.jpg";
import ImgQuestion52 from "../images/52.jpg";
import ImgQuestion53 from "../images/53.jpg";
import ImgQuestion54 from "../images/54.jpg";
import ImgQuestion55 from "../images/55.jpg";
import ImgQuestion56 from "../images/56.jpg";
import ImgQuestion57 from "../images/57.jpg";
import ImgQuestion58 from "../images/58.jpg";
import ImgQuestion59 from "../images/59.jpg";
import ImgQuestion6 from "../images/6.jpg";
import ImgQuestion60 from "../images/60.jpg";
import ImgQuestion61 from "../images/61.jpg";
import ImgQuestion62 from "../images/62.jpg";
import ImgQuestion63 from "../images/63.jpg";
import ImgQuestion64 from "../images/64.jpg";
import ImgQuestion65 from "../images/65.jpg";
import ImgQuestion66 from "../images/66.jpg";
import ImgQuestion67 from "../images/67.jpg";
import ImgQuestion7 from "../images/7.jpg";
import ImgQuestion8 from "../images/8.jpg";
import ImgQuestion9 from "../images/9.jpg";
import type { IQuestion } from "../types";

export const ALL_QUESTIONS: IQuestion[] = [
  {
    n: 1,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "Está permitido en la vía:",
    options: [
      {
        code: "a",
        description: "Recoger o dejar pasajeros o carga en cualquier lugar",
      },
      {
        code: "b",
        description:
          "Dejar animales sueltos o situarlos de forma tal que obstaculicen solo un poco el tránsito",
      },
      {
        code: "c",
        description: "Recoger o dejar pasajeros en lugares autorizados.",
      },
      {
        code: "d",
        description: "Ejercer el comercio ambulatorio o estacionario",
      },
    ],
    answer: "c",
  },
  {
    n: 2,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Respecto de los dispositivos de control o regulación del tránsito:",
    options: [
      {
        code: "a",
        description: "Solo los peatones están obligados a su obediencia",
      },
      {
        code: "b",
        description:
          "Los conductores y los peatones están obligados a su obediencia, salvo instrucción de la Policía Nacional del Perú asignada al tránsito que indique lo contrario",
      },
      {
        code: "c",
        description: "Solo los conductores están obligados a su obediencia.",
      },
      {
        code: "d",
        description:
          "Los conductores están obligados a su obediencia, aun cuando la Policía Nacional del Perú asignada al tránsito pueda indicar lo contrario.",
      },
    ],
    answer: "b",
  },
  {
    n: 3,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "La señal vertical reglamentaria R-6 ¿prohibido voltear a la izquierda¿, significa que:",
    options: [
      {
        code: "a",
        description:
          "Está prohibido voltear a la izquierda y, por lo tanto también está prohibido el giro en U.",
      },
      {
        code: "b",
        description:
          "Está prohibido voltear a la izquierda, sin embargo, está permitido el giro en U.",
      },
      {
        code: "c",
        description:
          "El único sentido de desplazamiento es continuar de frente.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "a",
  },
  {
    n: 4,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La señal vertical reglamentaria R-3 significa que:",
    image: ImgQuestion1,
    options: [
      {
        code: "a",
        description: "Nos acercamos a una zona restringida al tránsito.",
      },
      { code: "b", description: "Está permitido adelantar vehículos." },
      {
        code: "c",
        description:
          "El único sentido de desplazamiento es continuar de frente.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta" },
    ],
    answer: "c",
  },
  {
    n: 5,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "En las vías, las marcas en el pavimento que son del tipo central discontinua y de color amarillo significan que:",
    options: [
      {
        code: "a",
        description:
          "Está permitido cruzar al otro carril para el adelantamiento vehicular, si es que es seguro hacerlo.",
      },
      {
        code: "b",
        description:
          "No está permitido cruzar al otro carril para el adelantamiento vehicular.",
      },
      {
        code: "c",
        description:
          "Se está reduciendo el ancho de la calzada de la vía por donde se circula.",
      },
      {
        code: "d",
        description: "Se está frente a un lugar de cruce peatonal.",
      },
    ],
    answer: "a",
  },
  {
    n: 6,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "El color ámbar o amarillo del semáforo significa que:",
    options: [
      { code: "a", description: "Los vehículos deben avanzar." },
      { code: "b", description: "Los vehículos deben detenerse." },
      { code: "c", description: "Los vehículos deben acelerar la marcha." },
      {
        code: "d",
        description:
          "Los vehículos deben detenerse antes de ingresar a la intersección si su velocidad y ubicación lo permiten; de lo contrario, deberán cruzar y despejar la intersección.",
      },
    ],
    answer: "d",
  },
  {
    n: 7,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Los colores del semáforo tienen el siguiente significado: rojo: ____; ámbar o amarillo: ____; verde: ____",
    options: [
      { code: "a", description: "Detención - prevención - paso." },
      {
        code: "b",
        description: "Detención - paso con prevención - circulación rápida.",
      },
      {
        code: "c",
        description: "Disminución de la velocidad - prevención - paso rápido.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "a",
  },
  {
    n: 8,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "¿Qué indica una flecha verde en un semáforo vehicular?",
    options: [
      {
        code: "a",
        description:
          "Se puede continuar con precaución únicamente en la dirección de la flecha y desde el carril que esta flecha controla.",
      },
      {
        code: "b",
        description:
          "No está permitida la circulación en el sentido que indica la flecha.",
      },
      {
        code: "c",
        description: "Se debe respetar únicamente la luz circular.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "a",
  },
  {
    n: 9,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal vertical reglamentaria R-53:",
    image: ImgQuestion2,
    options: [
      { code: "a", description: "Prohíbe estacionar." },
      {
        code: "b",
        description:
          "Prohíbe al conductor detener el vehículo dentro del área de la intersección.",
      },
      { code: "c", description: "Prohíbe la carga y descarga." },
      {
        code: "d",
        description: "Prohíbe la circulación de vehículos motorizados",
      },
    ],
    answer: "b",
  },
  {
    n: 10,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si llega a una intersección y visualiza el semáforo con una flecha roja hacia la izquierda y la luz circular verde prendidas al mismo tiempo, la acción correcta es:",
    options: [
      {
        code: "a",
        description:
          "Avanzar en cualquier sentido, ya que la luz circular está en verde.",
      },
      {
        code: "b",
        description:
          "Avanzar, pero el giro a la izquierda está prohibido por la flecha roja.",
      },
      {
        code: "c",
        description:
          "Avanzar únicamente hacia la izquierda, pues continuar de frente está prohibido.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "b",
  },
  {
    n: 11,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si llega a una intersección donde el semáforo mostra uma luz intermitente, qué afirmación es correcta:",
    options: [
      {
        code: "a",
        description:
          "Si la luz intermitente es roja, ésta es equivalente a un ¿CEDA EL PASO?",
      },
      {
        code: "b",
        description:
          "Si la luz intermitente es ámbar, tiene preferencia, debiendo reducir la velocidad y continuar con precaución.",
      },
      {
        code: "c",
        description:
          'Si la luz intermitente es verde, ésta es equivalente a un "PARE".',
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "b",
  },
  {
    n: 12,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "¿La luz intermitente roja es igual que una señal de PARE?",
    options: [
      { code: "a", description: "Verdad." },
      {
        code: "b",
        description:
          "Es verdad siempre y cuando también se encuentre un Policía de Tránsito indicando la señal de Pare.",
      },
      { code: "c", description: "Falso" },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "a",
  },
  {
    n: 13,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Al aproximarse a una intersección con giro permitido a la izquierda, la conducta correcta es:",
    options: [
      { code: "a", description: "Girar desde cualquier carril." },
      {
        code: "b",
        description:
          "Colocarse en el carril derecho, luego girar con precaución.",
      },
      {
        code: "c",
        description:
          "Colocarse en el carril más despejado de tráfico, luego girar con precaución.",
      },
      {
        code: "d",
        description:
          "Hacer la señal de volteo a la izquierda con las luces direccionales, ubicar con antelación el vehículo en el carril de circulación de la izquierda y girar con precaución.",
      },
    ],
    answer: "d",
  },
  {
    n: 14,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Al cambiar de carril en una vía de un solo sentido con múltiples carriles, ¿cuál es la conducta correcta?",
    options: [
      {
        code: "a",
        description:
          "Se deben encender las luces direccionales primero, buscar una brecha y realizar el cambio de carril con precaución.",
      },
      {
        code: "b",
        description:
          "Se debe encontrar una brecha, luego cambiar de carril con precaución; no es necesario el uso de luces direccionales para cambios de carril.",
      },
      {
        code: "c",
        description:
          "Se debe advertir utilizando el claxon, identificar una brecha y realizar el cambio de carril con precaución.",
      },
      {
        code: "d",
        description:
          "Está prohibido el cambio de carril en vías de un solo sentido.",
      },
    ],
    answer: "a",
  },
  {
    n: 15,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Respecto a los cruces a nivel con vías férreas, señale la afirmación correcta:",
    options: [
      {
        code: "a",
        description:
          "Los vehículos que transitan por la vía férrea tienen preferencia de paso sobre los que transitan por la vía que la cruza.",
      },
      {
        code: "b",
        description:
          "Los vehículos que transitan por la vía que cruza la línea férrea tienen preferencia de paso sobre los que transitan por la vía férrea.",
      },
      {
        code: "c",
        description: "El vehículo que llegue primero tiene preferencia.",
      },
      {
        code: "d",
        description:
          "Tiene preferencia el conductor que viene por la derecha del otro.",
      },
    ],
    answer: "a",
  },
  {
    n: 16,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Ante la señal de color rojo del semáforo y la indicación de continuar la marcha del efectivo de la Policía Nacional del Perú asignado al control del tránsito, corresponde:",
    options: [
      { code: "a", description: "Detenerse hasta que cambie a luz verde." },
      { code: "b", description: "Continuar la marcha." },
      { code: "c", description: "Estar prevenido." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "b",
  },
  {
    n: 17,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "Está prohibido estacionar un vehículo:",
    options: [
      { code: "a", description: "En las curvas." },
      { code: "b", description: "Dentro de una intersección." },
      {
        code: "c",
        description:
          "Frente a la entrada de garajes y de recintos militares o policiales.",
      },
      { code: "d", description: "Todas las alternativas son correctas." },
    ],
    answer: "d",
  },
  {
    n: 18,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal vertical reglamentaria (R-29):",
    image: ImgQuestion3,
    options: [
      {
        code: "a",
        description: "Prohíbe el uso de la bocina en vías urbanas.",
      },
      { code: "b", description: "Prohíbe el uso de la bocina en carreteras." },
      { code: "c", description: "Prohíbe el uso de la bocina." },
      { code: "d", description: "Prohíbe hacer ruido." },
    ],
    answer: "c",
  },
  {
    n: 19,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Se le impondrá el pago de una multa y no podrá obtener la licencia de conducir por 3 años a la persona que:",
    options: [
      {
        code: "a",
        description:
          "Conduzca un vehículo automotor sin tener licencia de conducir.",
      },
      {
        code: "b",
        description:
          "Conduzca un vehículo que no cuente con el equipamiento para brindar una máxima comodidad a sus ocupantes.",
      },
      {
        code: "c",
        description: "Conduzca un vehículo sin contar con el SOAT.",
      },
      { code: "d", description: "a y c son correctas" },
    ],
    answer: "a",
  },
  {
    n: 20,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "En el supuesto que se encuentre manejando y un vehículo que tiene la intención de sobrepasarlo o adelantarlo lo alcance, ¿qué debería hacer usted?",
    options: [
      {
        code: "a",
        description:
          "Debe aumentar la velocidad para no dejar que el otro vehículo lo pase.",
      },
      {
        code: "b",
        description:
          "No debe aumentar la velocidad hasta que el vehículo lo sobrepase.",
      },
      {
        code: "c",
        description:
          "Debe disminuir drásticamente la velocidad de su vehículo.",
      },
      { code: "d", description: "Debe detener su vehículo." },
    ],
    answer: "b",
  },
  {
    n: 21,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "¿Cuál de las siguientes afirmaciones es correcta?",
    options: [
      {
        code: "a",
        description:
          "El conductor debe respetar los límites máximos y mínimos de velocidad establecidos.",
      },
      {
        code: "b",
        description:
          "El conductor debe respetar únicamente los límites máximos de velocidad, pues no existen límites mínimos.",
      },
      {
        code: "c",
        description:
          "El conductor puede conducir a la velocidad que desee, siempre que lo haga de manera prudente.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "a",
  },
  {
    n: 22,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "¿Qué luces debe utilizar un conductor que circula en las vías públicas urbanas por la noche?",
    options: [
      { code: "a", description: "Bajas." },
      { code: "b", description: "Altas." },
      {
        code: "c",
        description:
          "Luces altas en las intersecciones y bajas en las avenidas.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "a",
  },
  {
    n: 23,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "En caso de accidentes, el SOAT cubre los daños que sufren:",
    options: [
      { code: "a", description: "Solo los ocupantes del vehículo." },
      {
        code: "b",
        description: "Los ocupantes y terceros no ocupantes del vehículo.",
      },
      { code: "c", description: "Solo terceros afectados." },
      { code: "d", description: "Solo el conductor del vehículo." },
    ],
    answer: "b",
  },
  {
    n: 24,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "¿Cuál de los siguientes seguros es exigible para conducir un vehículo automotor?",
    options: [
      {
        code: "a",
        description:
          "Cualquier tipo de seguro de accidentes personales que comercialicen las empresas de seguro.",
      },
      {
        code: "b",
        description:
          "Cualquier tipo de seguro vehicular, siempre que cubra a los ocupantes del vehículo y terceros afectados por un accidente de tránsito.",
      },
      {
        code: "c",
        description: "El Seguro Obligatorio de Accidentes de Tránsito - SOAT.",
      },
      { code: "d", description: "No es obligatorio contar con un seguro." },
    ],
    answer: "c",
  },
  {
    n: 25,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Cuándo es obligatorio darle preferencia de paso a un vehículo de emergencia o vehículo oficial:",
    options: [
      { code: "a", description: "Cuando emita señales visibles." },
      { code: "b", description: "Cuando emita señales audibles." },
      { code: "c", description: "Cuando emita señales audibles y visibles." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "c",
  },
  {
    n: 26,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si por el carril por donde está conduciendo se aproxima a un vehículo de transporte escolar que se encuentra detenido, recogiendo o dejando escolares ¿Qué debe hacer?",
    options: [
      {
        code: "a",
        description:
          "Detener el vehículo y no continuar la marcha hasta que haya culminado el ascenso o descenso de los escolares.",
      },
      {
        code: "b",
        description: "Adelantar por el lado izquierdo, pero con precaución.",
      },
      {
        code: "c",
        description: "Tocar el claxon para alertar que está pasando.",
      },
      { code: "d", description: "Adelantar muy despacio." },
    ],
    answer: "a",
  },
  {
    n: 27,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "¿Qué significa un triángulo rojo de seguridad colocado en la calzada?",
    options: [
      {
        code: "a",
        description:
          "La presencia de un vehículo inmovilizado en la vía pública por alguna circunstancia.",
      },
      { code: "b", description: "Zona de obras por reparación en la calzada." },
      {
        code: "c",
        description: "Que el vehículo que lo enfrenta debe detenerse.",
      },
      { code: "d", description: "a y c son correctas." },
    ],
    answer: "a",
  },
  {
    n: 28,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal vertical reglamentaria P-22C indica que:",
    image: ImgQuestion4,
    options: [
      { code: "a", description: "Está permitido adelantar." },
      { code: "b", description: "Se aproxima un carril adicional." },
      { code: "c", description: "Está permitido cambiar de carril." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "b",
  },
  {
    n: 29,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Las luces intermitentes de emergencia del vehículo deben utilizarse obligatoriamente:",
    options: [
      {
        code: "a",
        description:
          "Para girar en las intersecciones y para advertir los cambios de carril.",
      },
      {
        code: "b",
        description:
          "Para indicar la detención, parada o estacionamiento en zona peligrosa o la ejecución de maniobras riesgosas.",
      },
      { code: "c", description: "Durante toda la circulación del vehículo." },
      { code: "d", description: "En cada intersección." },
    ],
    answer: "b",
  },
  {
    n: 30,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "En intersecciones que no tienen señales de Pare, Ceda el Paso o Semáforo, ¿las vías de doble sentido tienen prioridad de paso respecto a las vías de un solo sentido de igual clasificación?",
    options: [
      { code: "a", description: "No." },
      { code: "b", description: "Si." },
      { code: "c", description: "Depende de la intersección." },
      { code: "d", description: "No se encuentra regulado en el reglamento." },
    ],
    answer: "b",
  },
  {
    n: 31,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si usted se aproxima a una señal de PARE colocada verticalmente o pintada en la vía, la acción correcta es:",
    options: [
      {
        code: "a",
        description:
          "Disminuir su velocidad y cederle el paso a los vehículos que circulan por la transversal.",
      },
      { code: "b", description: "Disminuir su velocidad y pasar con cuidado." },
      { code: "c", description: "Sobre parar y pasar rápidamente." },
      {
        code: "d",
        description:
          "Parar por completo, ceder el paso a los usuarios que tengan preferencia y luego continuar con precaución.",
      },
    ],
    answer: "d",
  },
  {
    n: 32,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "¿Cuál es la diferencia entre las señales P-2A y P-1A?",
    image: ImgQuestion5,
    options: [
      { code: "a", description: "No hay diferencia, se usan indistintamente." },
      {
        code: "b",
        description: "La señal P-2A se utiliza en situaciones de mayor riesgo.",
      },
      {
        code: "c",
        description:
          "La señal P-1A advierte la presencia de curva pronunciada a la derecha mientras que la P-2A advierte la presencia de curva suave a la derecha.",
      },
      {
        code: "d",
        description:
          "La señal P-2A advierte la presencia de curva pronunciada a la derecha mientras que la P-1A advierte la presencia de curva suave a la derecha.",
      },
    ],
    answer: "c",
  },
  {
    n: 33,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "¿Qué indica la señal R-30F?",
    image: ImgQuestion6,
    options: [
      { code: "a", description: "Tener precaución con vehículos lentos." },
      {
        code: "b",
        description: "Regula la velocidad máxima permitida en curvas.",
      },
      {
        code: "c",
        description: "Regula la velocidad máxima en zonas rurales.",
      },
      { code: "d", description: "No se encuentra regulada en el reglamento." },
    ],
    answer: "b",
  },
  {
    n: 34,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "¿Qué señal debe utilizar el conductor para disminuir la velocidad o detener el vehículo cuando está en marcha?",
    options: [
      { code: "a", description: "Luces direccionales." },
      {
        code: "b",
        description:
          "Solo el antebrazo izquierdo y mano extendidos hacia abajo fuera del vehículo.",
      },
      {
        code: "c",
        description:
          "Luces intermitentes y, en caso de fuerza mayor, utilizar el antebrazo izquierdo y mano extendidos hacia abajo fuera del vehículo, haciendo ángulo recto con el brazo.",
      },
      { code: "d", description: "Luces bajas." },
    ],
    answer: "c",
  },
  {
    n: 35,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si dos vehículos se aproximan simultáneamente a una intersección no regulada (sin señalización) procedentes de vías diferentes, ¿quién tiene preferencia de paso?",
    image: ImgQuestion7,
    options: [
      { code: "a", description: "Cualquiera de los dos." },
      { code: "b", description: "El que se aproxime por la derecha del otro." },
      {
        code: "c",
        description: "El que se aproxime por la izquierda del otro.",
      },
      { code: "d", description: "El que haga sonar la bocina primero." },
    ],
    answer: "b",
  },
  {
    n: 36,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "En una intersección no regulada (sin señalización) tiene preferencia de paso:",
    options: [
      {
        code: "a",
        description: "El vehículo que ingresó primero a la intersección.",
      },
      {
        code: "b",
        description: "El vehículo que haga sonar la bocina primero.",
      },
      {
        code: "c",
        description: "El vehículo que haga cambio de luces primero.",
      },
      { code: "d", description: "Cualquier vehículo" },
    ],
    answer: "a",
  },
  {
    n: 37,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "En una rotonda, tiene prioridad de paso el vehículo que:",
    options: [
      { code: "a", description: "Quiere ingresar a la rotonda." },
      { code: "b", description: "Circula por ella." },
      { code: "c", description: "Acelera primero." },
      { code: "d", description: "Hace sonar la bocina." },
    ],
    answer: "b",
  },
  {
    n: 38,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "El sobrepaso o adelantamiento de un vehículo en movimiento se efectúa, salvo excepciones, por la ____ retornando el vehículo después de la maniobra a su carril original.",
    options: [
      { code: "a", description: "Derecha." },
      { code: "b", description: "Izquierda." },
      { code: "c", description: "Berma" },
      { code: "d", description: "Por la derecha o izquierda." },
    ],
    answer: "b",
  },
  {
    n: 39,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si un conductor está tomando medicamentos y por ello siente sueño ¿qué debe hacer?",
    options: [
      { code: "a", description: "Manejar normalmente." },
      { code: "b", description: "Manejar despacio." },
      { code: "c", description: "Abstenerse de manejar." },
      { code: "d", description: "Manejar con un copiloto." },
    ],
    answer: "c",
  },
  {
    n: 40,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Son documentos que deben portarse obligatoriamente, durante la conducción del vehículo, y exhibirse cuando la autoridad competente lo solicite:",
    options: [
      {
        code: "a",
        description:
          "Documento de identidad, SOAT vigente (puede ser virtual) y tarjeta de identificación vehicular.",
      },
      {
        code: "b",
        description:
          "Certificado de Inspección Técnica Vehicular y contrato de compraventa del vehículo.",
      },
      { code: "c", description: "Contrato de compraventa del vehículo." },
      { code: "d", description: "Todas las alternativas son correctas." },
    ],
    answer: "a",
  },
  {
    n: 41,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "En los tramos de una vía con pendiente pronunciada, que permite la circulación de un solo vehículo, se debe de tener en cuenta que el vehículo que asciende respecto al vehículo que desciende:",
    options: [
      { code: "a", description: "No tiene preferencia de paso." },
      { code: "b", description: "Tiene preferencia de paso." },
      { code: "c", description: "Debe detenerse." },
      { code: "d", description: "Debe retroceder." },
    ],
    answer: "b",
  },
  {
    n: 42,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "Al cambiar de dirección, un conductor debe:",
    options: [
      {
        code: "a",
        description: "Señalizar toda la maniobra hasta su culminación.",
      },
      { code: "b", description: "Cambiar de dirección y luego señalizar." },
      { code: "c", description: "No existe ninguna obligación." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "a",
  },
  {
    n: 43,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "¿Se puede conducir un vehículo con el motor en punto neutro?",
    options: [
      {
        code: "a",
        description: "Sí, pero solo si está bajando una pendiente.",
      },
      { code: "b", description: "No, está prohibido." },
      {
        code: "c",
        description: "Sí, en caso de que el conductor no sea novato.",
      },
      { code: "d", description: "No se encuentra regulado en la norma." },
    ],
    answer: "b",
  },
  {
    n: 44,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Para girar o cambiar de carril hacia la derecha, el conductor debe utilizar las luces direccionales y, en casos de fuerza mayor, la siguiente señal manual:",
    options: [
      {
        code: "a",
        description:
          "Brazo, antebrazo izquierdo y mano extendidos hacia afuera del vehículo.",
      },
      {
        code: "b",
        description:
          "Antebrazo izquierdo y mano extendidos hacia arriba fuera del vehículo, formando un ángulo recto con el brazo.",
      },
      {
        code: "c",
        description:
          "Brazo, antebrazo derecho y mano extendidos hacia afuera del vehículo.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "b",
  },
  {
    n: 45,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si la licencia de conducir no se encuentra vigente, los vehículos que autoriza a conducir dicha licencia:",
    options: [
      { code: "a", description: "No podrán ser conducidos." },
      {
        code: "b",
        description: "Podrán ser conducidos únicamente en zonas urbanas.",
      },
      {
        code: "c",
        description:
          "Podrán ser conducidos hasta por 90 días posteriores a la pérdida de vigencia de la licencia.",
      },
      {
        code: "d",
        description:
          "Podrán ser conducidos con normalidad hasta que renueve su licencia.",
      },
    ],
    answer: "a",
  },
  {
    n: 46,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "De acuerdo con el sistema de control de licencias de conducir por puntos:",
    options: [
      { code: "a", description: "Determinadas infracciones suman puntos." },
      {
        code: "b",
        description:
          "Una infracción puede sumar o disminuir puntos, a eleção do infrator.",
      },
      { code: "c", description: "Determinadas infracciones restan puntos." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "a",
  },
  {
    n: 47,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "¿Cuál es la consecuencia de acumular 100 puntos en la licencia de conducir en un período de 24 meses?",
    options: [
      { code: "a", description: "Suspensión de licencia de conducir." },
      {
        code: "b",
        description: "Anulación de la Placa Única Nacional de Rodaje.",
      },
      {
        code: "c",
        description:
          "Inhabilitación definitiva para obtener una licencia de conducir.",
      },
      { code: "d", description: "Internamiento vehicular." },
    ],
    answer: "a",
  },
  {
    n: 48,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "Se entiende por carril a la:",
    options: [
      {
        code: "a",
        description: "Parte de la vía destinada a la circulación de peatones.",
      },
      {
        code: "b",
        description:
          "Parte de la calzada destinada al tránsito de una fila de vehículos.",
      },
      {
        code: "c",
        description:
          "Vía rural destinada a la circulación de peatones y animales.",
      },
      { code: "d", description: "Todas las alternativas son correctas." },
    ],
    answer: "b",
  },
  {
    n: 49,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "Se entiende por línea de parada a:",
    options: [
      {
        code: "a",
        description:
          "La línea transversal marcada en la calzada antes de la intersección, que indica al conductor el límite para detener el vehículo.",
      },
      {
        code: "b",
        description:
          "Las líneas que se encuentran en los lugares del estacionamiento.",
      },
      {
        code: "c",
        description:
          "El lugar utilizado para embarcar y desembarcar pasajeros.",
      },
      { code: "d", description: "Todas las alternativas son correctas." },
    ],
    answer: "a",
  },
  {
    n: 50,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal vertical reglamentaria P-17A, indica:",
    image: ImgQuestion8,
    options: [
      { code: "a", description: "Reducción de la calzada al lado derecho." },
      { code: "b", description: "Reducción de la calzada al lado izquierdo." },
      { code: "c", description: "Reducción de la calzada en ambos lados." },
      {
        code: "d",
        description: "Ensanchamiento de la calzada en ambos lados.",
      },
    ],
    answer: "c",
  },
  {
    n: 51,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "En caso de encontrar marcación de doble línea amarilla compuesta por un trazo continuo y otro trazo discontinuo en una vía de doble sentido, ¿qué se debe hacer?",
    options: [
      { code: "a", description: "Se puede adelantar en ambos sentidos." },
      {
        code: "b",
        description: "No está permitido adelantar en ningún sentido.",
      },
      {
        code: "c",
        description:
          "Respetar la línea que está de su lado (si es continua, no adelantar; si es discontinua, está permitido adelantar).",
      },
      {
        code: "d",
        description:
          "Respetar la línea que está de su lado (si es discontinua, no adelantar; si es continua, está permitido adelantar)",
      },
    ],
    answer: "c",
  },
  {
    n: 52,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "Se define como zona rígida al:",
    options: [
      {
        code: "a",
        description: "Área donde se prohíbe la circulación de vehículos.",
      },
      {
        code: "b",
        description: "Área donde se prohíbe la circulación de peatones.",
      },
      {
        code: "c",
        description:
          "Área de la vía en la que se prohíbe el estacionamiento de vehículos.",
      },
      { code: "d", description: "Todas las alternativas son correctas." },
    ],
    answer: "c",
  },
  {
    n: 53,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "La posición de frente o de espaldas ejecutada por el efectivo de la Policía Nacional del Perú asignado al control de tránsito significa:",
    options: [
      {
        code: "a",
        description: "Obligación de detenerse de quien así lo enfrente.",
      },
      {
        code: "b",
        description:
          "Continuar la marcha por el carril izquierdo de la calzada.",
      },
      { code: "c", description: "Continuar la marcha." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "a",
  },
  {
    n: 54,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Siempre que no exista una señal de límite de velocidad, en zonas urbanas el límite máximo de velocidad en calles y jirones es de:",
    options: [
      { code: "a", description: "30km/h." },
      { code: "b", description: "40km/h." },
      { code: "c", description: "60km/h." },
      { code: "d", description: "80km/h." },
    ],
    answer: "b",
  },
  {
    n: 55,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Siempre que no exista una señal de límite de velocidad, en zonas urbanas el límite máximo de velocidad en avenidas es de:",
    options: [
      { code: "a", description: "30km/h." },
      { code: "b", description: "40km/h." },
      { code: "c", description: "60km/h." },
      { code: "d", description: "80km/h." },
    ],
    answer: "c",
  },
  {
    n: 56,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Siempre que no exista una señal de límite de velocidad, en zonas urbanas el límite máximo de velocidad en vías expresas es de:",
    options: [
      { code: "a", description: "60km/h." },
      { code: "b", description: "70km/h." },
      { code: "c", description: "80km/h." },
      { code: "d", description: "100km/h." },
    ],
    answer: "c",
  },
  {
    n: 57,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Siempre que no exista una señal de límite de velocidad en zonas urbanas, el límite máximo de velocidad en zona escolar es de:",
    options: [
      { code: "a", description: "20km/h." },
      { code: "b", description: "30km/h." },
      { code: "c", description: "35km/h." },
      { code: "d", description: "50km/h." },
    ],
    answer: "b",
  },
  {
    n: 58,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Siempre que no exista una señal de límite de velocidad en carreteras, el límite máximo de velocidad para automóviles, camionetas y motocicletas es de:",
    options: [
      { code: "a", description: "80km/h." },
      { code: "b", description: "90km/h." },
      { code: "c", description: "100km/h." },
      { code: "d", description: "110km/h." },
    ],
    answer: "c",
  },
  {
    n: 59,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Siempre que no exista una señal de límite de velocidad mínima, el límite mínimo de velocidad en zona urbana y en carreteras es de:",
    options: [
      { code: "a", description: "30km/h." },
      {
        code: "b",
        description:
          "La mitad de la velocidad máxima establecida para cada tipo de vía.",
      },
      { code: "c", description: "20 km/h." },
      { code: "d", description: "15 km/h." },
    ],
    answer: "b",
  },
  {
    n: 60,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "¿Cuál es la sanción por conducir con presencia de alcohol en la sangre en proporción mayor a lo previsto en el Código Penal, o bajo los efectos de estupefacientes, narcóticos y/o alucinógenos comprobados con el examen respectivo, o por negarse al mismo y que haya participado en un accidente de tránsito?",
    options: [
      { code: "a", description: "Multa." },
      { code: "b", description: "Cancelación de licencia de conducir." },
      { code: "c", description: "Suspensión de la licencia de conducir." },
      {
        code: "d",
        description:
          "Multa, cancelación de la licencia de conducir e inhabilitación definitiva para obtener una licencia de conducir.",
      },
    ],
    answer: "d",
  },
  {
    n: 61,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "¿Cuál es la sanción si en un operativo de alcoholemia usted es intervenido y se comprueba que ha consumido alcohol por encima del límite legal, o está conduciendo bajo los efectos de estupefacientes, narcóticos y/o alucinógenos comprobada con el examen respectivo?",
    options: [
      { code: "a", description: "Una multa" },
      { code: "b", description: "La suspensión de la licencia de conducir." },
      {
        code: "c",
        description:
          "Multa y suspensión de la licencia de conducir por 3 años.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "c",
  },
  {
    n: 62,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "La frecuencia de la inspección técnica de un vehículo particular es:",
    options: [
      { code: "a", description: "Cada medio año." },
      { code: "b", description: "Cada año." },
      { code: "c", description: "Cada dos años." },
      { code: "d", description: "Cada tres años." },
    ],
    answer: "b",
  },
  {
    n: 63,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "¿A partir de qué año de antigüedad debe realizarse la inspección técnica de un vehículo particular para transporte de personas de hasta 9 asientos incluido el conductor de la categoría M1?",
    options: [
      {
        code: "a",
        description:
          "A partir del segundo año contado desde el año siguiente de su fabricação.",
      },
      {
        code: "b",
        description:
          "A partir del cuarto año contado desde el año siguiente de su fabricação.",
      },
      {
        code: "c",
        description:
          "A partir del quinto año contado desde el año siguiente de su fabricação.",
      },
      { code: "d", description: "No está sujeto a inspección técnica." },
    ],
    answer: "b",
  },
  {
    n: 64,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "¿Cuál es el plazo de vigencia del SOAT?",
    options: [
      { code: "a", description: "1 año." },
      { code: "b", description: "6 meses." },
      { code: "c", description: "4 años." },
      { code: "d", description: "2 años." },
    ],
    answer: "a",
  },
  {
    n: 65,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si ocurre un accidente de tránsito, ¿qué obligación tiene el conductor, el propietario del vehículo o el prestador del servicio de transporte?",
    options: [
      { code: "a", description: "Dar aviso a los bomberos." },
      { code: "b", description: "Dar aviso solo a la compañía de seguros." },
      {
        code: "c",
        description:
          "Dar aviso a la compañía de seguros y dejar constancia en la delegación de la Policía Nacional del Perú más cercana.",
      },
      {
        code: "d",
        description: "Dar aviso únicamente a la Policía Nacional del Perú.",
      },
    ],
    answer: "c",
  },
  {
    n: 66,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si una licencia de conducir consiga alguna restricción, es correcto afirmar que:",
    options: [
      { code: "a", description: "Dicha restricción es meramente informativa." },
      {
        code: "b",
        description: "Es una obligación cumplir con la restricción.",
      },
      {
        code: "c",
        description:
          "Incumplir la restricción no genera un riesgo para la seguridad vial.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "b",
  },
  {
    n: 67,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La señal preventiva P-33A, significa:",
    image: ImgQuestion9,
    options: [
      { code: "a", description: "Señal de curva sinuosa." },
      { code: "b", description: "Señal de proximidad a un badén." },
      {
        code: "c",
        description:
          "Señal de proximidad de un reductor de velocidad tipo resalto.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "c",
  },
  {
    n: 68,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si su vehículo deja de funcionar o comienza a tener problemas y usted trata de moverlo al costado de la autopista, debe:",
    options: [
      {
        code: "a",
        description: "Activar las luces intermitentes de emergencia.",
      },
      { code: "b", description: "Parar en su posición actual." },
      { code: "c", description: "Salir del vehículo rápidamente." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "a",
  },
  {
    n: 69,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "¿Está permitido usar la bocina de su vehículo para advertir al conductor del vehículo que circula delante, que será adelantado?",
    options: [
      {
        code: "a",
        description: "Sí, siempre y cuando el sonido no sea estridente.",
      },
      {
        code: "b",
        description:
          "Si, salvo prohibición expresa mediante la correspondiente señal.",
      },
      { code: "c", description: "No, está prohibido." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "c",
  },
  {
    n: 70,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si observa que se aproxima una ambulancia sin las luces especiales encendidas y sin sirena, es correcto afirmar que:",
    options: [
      {
        code: "a",
        description: "No estamos obligados a darle preferencia de paso.",
      },
      {
        code: "b",
        description:
          "Estamos obligados a darle prioridad de paso por ser una ambulancia.",
      },
      {
        code: "c",
        description: "Está informando que está en servicio de urgencia.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "a",
  },
  {
    n: 71,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si se encuentra en una intersección y se enciende la luz verde del semáforo y observa que en la calle transversal hay vehículos o personas despejando la intersección, ¿qué debe hacer?",
    options: [
      {
        code: "a",
        description:
          "No iniciar la marcha hasta que el vehículo o las personas terminen de cruzar.",
      },
      {
        code: "b",
        description: "Tocar el claxon para que se apuren en pasar.",
      },
      {
        code: "c",
        description: "Bajar del vehículo y reclamar la falta al infractor.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "a",
  },
  {
    n: 72,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "En señalética vial, el color ____ en el pavimento es utilizado para carriles de tráfico en sentido opuesto y el color ____ en el pavimento es utilizado como separador de carriles de tráfico en el mismo sentido.",
    options: [
      { code: "a", description: "Amarillo - blanco." },
      { code: "b", description: "Blanco - Amarillo." },
      { code: "c", description: "Azul - rojo." },
      { code: "d", description: "Rojo - Amarillo." },
    ],
    answer: "a",
  },
  {
    n: 73,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si una fila de escolares cruza la calzada fuera del crucero peatonal, ¿qué acción se debe tomar?",
    options: [
      { code: "a", description: "Advertir con el claxon." },
      { code: "b", description: "Advertir a viva voz." },
      { code: "c", description: "Parar y ceder el paso." },
      { code: "d", description: "Continuar la marcha lentamente." },
    ],
    answer: "c",
  },
  {
    n: 74,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "Si se aproxima a una zona escolar, ¿qué acción debe realizar?",
    options: [
      {
        code: "a",
        description: "No tiene ninguna obligación si no hay señalización.",
      },
      { code: "b", description: "Disminuir la velocidad a 40 Km/h." },
      { code: "c", description: "Disminuir la velocidad a 30 Km/h." },
      { code: "d", description: "Disminuir la velocidad a 35 km/h." },
    ],
    answer: "c",
  },
  {
    n: 75,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Tienen el objetivo de notificar a los usuarios las limitaciones, prohibiciones o restricciones en el uso de la vía.",
    options: [
      { code: "a", description: "Señales reguladoras o de reglamentación." },
      { code: "b", description: "Señales preventivas." },
      { code: "c", description: "Señales informativas." },
      { code: "d", description: "Señales horizontales." },
    ],
    answer: "a",
  },
  {
    n: 76,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Tienen el propósito de advertir a los usuarios sobre la existencia y naturaleza de un peligro en la vía.",
    options: [
      { code: "a", description: "Señales reguladoras o de reglamentación." },
      { code: "b", description: "Señales preventivas." },
      { code: "c", description: "Señales informativas." },
      { code: "d", description: "Señales horizontales." },
    ],
    answer: "b",
  },
  {
    n: 77,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "Es una infracción de tránsito:",
    options: [
      {
        code: "a",
        description: "No detenerse totalmente en una señal de PARE.",
      },
      {
        code: "b",
        description:
          "Arrojar, depositar o abandonar objetos o sustancias en la vía pública que dificulten la circulación.",
      },
      {
        code: "c",
        description:
          "Utilizar la bocina para llamar la atención en forma innecesaria.",
      },
      { code: "d", description: "Todas las alternativas son correctas." },
    ],
    answer: "d",
  },
  {
    n: 78,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      '¿Qué debería hacer el conductor al acercarse a una señal de "CEDA EL PASO" en una intersección?',
    options: [
      {
        code: "a",
        description: "Ceder el paso a los vehículos de emergencia.",
      },
      {
        code: "b",
        description: "Mantener la velocidad y avanzar con cuidado.",
      },
      {
        code: "c",
        description:
          "Disminuir la velocidad, parar si es necesario y ceder el paso a los peatones o vehículos que circulan por la vía transversal.",
      },
      {
        code: "d",
        description: "Parar totalmente y luego avanzar con cuidado.",
      },
    ],
    answer: "c",
  },
  {
    n: 79,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "No se debe conducir un vehículo:",
    options: [
      { code: "a", description: "Si no se cuenta con el SOAT." },
      {
        code: "b",
        description:
          "En retroceso, salvo las excepciones que establece la norma.",
      },
      {
        code: "c",
        description:
          "Si no se tiene la licencia para el tipo de vehículo que se quiere conducir.",
      },
      { code: "d", description: "Todas son correctas." },
    ],
    answer: "d",
  },
  {
    n: 80,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "¿Qué debe hacer si se aproxima a una intersección sin semáforo y sin presencia de la Policía de Tránsito, y observa que un peatón está cruzando por el paso peatonal?",
    options: [
      { code: "a", description: "Disminuir la velocidad y pasar con cuidado." },
      {
        code: "b",
        description: "Detener el vehículo y ceder el paso al peatón.",
      },
      { code: "c", description: "Continuar porque usted tiene la prioridad." },
      {
        code: "d",
        description:
          "Incrementar la velocidad para adelantar el cruce el peatón.",
      },
    ],
    answer: "b",
  },
  {
    n: 81,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Sobre el uso del cinturón de seguridad en los vehículos que se encuentran en circulación, es correcto afirmar que:",
    options: [
      {
        code: "a",
        description:
          "El uso del cinturón de seguridad es obligatorio para las personas que ocupen los asientos delanteros.",
      },
      {
        code: "b",
        description:
          "En los asientos posteriores el uso del cinturón de seguridad es obligatorio en todos los vehículos cuando los tengan incorporados de fábrica y en los casos en que, de acuerdo a las normas se encuentren obligados a tenerlos.",
      },
      {
        code: "c",
        description:
          "El uso del cinturón de seguridad no solo es obligatorio para el conductor.",
      },
      { code: "d", description: "Todas las alternativas son correctas." },
    ],
    answer: "d",
  },
  {
    n: 82,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si en una vía de dos carriles con tránsito en un mismo sentido usted se desplaza lentamente en su vehículo, debe circular por el carril de la ____ y los vehículos que circulen a mayor velocidad deben hacerlo por el carril de la ____.",
    options: [
      { code: "a", description: "Izquierda / Derecha." },
      { code: "b", description: "Derecha / Derecha." },
      { code: "c", description: "Derecha / Izquierda." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "c",
  },
  {
    n: 83,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Sobre el uso de la bocina del vehículo, es correcto afirmar que:",
    options: [
      {
        code: "a",
        description:
          "El conductor debe tratar de no utilizar la bocina para llamar la atención en forma innecesaria.",
      },
      {
        code: "b",
        description:
          "El uso de la bocina para llamar la atención en forma innecesaria no es una infracción al tránsito.",
      },
      {
        code: "c",
        description:
          "El conductor únicamente debe utilizar la bocina para evitar situaciones peligrosas.",
      },
      { code: "d", description: "a y b son correctas." },
    ],
    answer: "c",
  },
  {
    n: 84,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Uma línea blanca continua en el sentido longitudinal de una vía, que se coloca en el pavimento, le indica al conductor:",
    options: [
      {
        code: "a",
        description:
          "Que se puede adelantar, debido a que la línea no es amarilla continua.",
      },
      {
        code: "b",
        description: "Que está prohibido cruzar la línea y no hay excepciones.",
      },
      {
        code: "c",
        description:
          "Que está prohibido pasar al otro lado de la línea con algunas excepciones.",
      },
      { code: "d", description: "Que es zona de peatones." },
    ],
    answer: "c",
  },
  {
    n: 85,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "¿Cuál es el número máximo de personas que puede transportar un vehículo particular?",
    options: [
      {
        code: "a",
        description:
          "Es igual al número de asientos señalados en la tarjeta de identificación vehicular, con la excepción de niños en brazos en los asientos posteriores.",
      },
      {
        code: "b",
        description:
          "No existe prohibición sobre un número máximo de personas que se puede transportar.",
      },
      {
        code: "c",
        description:
          "La restricción sobre un número máximo de personas que se puede transportar se aplica para los asientos delanteros, para los asientos posteriores no hay restricción.",
      },
      {
        code: "d",
        description:
          "Se puede transportar a todas las personas que entren en el vehículo, sin restricción, siempre y cuando no obstaculicen la visibilidad del conductor y todos sean de la misma familia.",
      },
    ],
    answer: "a",
  },
  {
    n: 86,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La acción correcta al abastecer de combustible su vehículo, es:",
    options: [
      {
        code: "a",
        description:
          "Asegurarse de que todos los pasajeros permanezcan a bordo del vehículo.",
      },
      {
        code: "b",
        description:
          "Abstenerse de fumar tanto el conductor como sus acompañantes.",
      },
      { code: "c", description: "Mantener encendido el motor del vehículo." },
      { code: "d", description: "Todas las alternativas son correctas." },
    ],
    answer: "b",
  },
  {
    n: 87,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Mientras usted está conduciendo su vehículo automotor, ¿puede llevar sujeto a su auto al conductor de una bicicleta mientras éste la conduce?",
    options: [
      {
        code: "a",
        description:
          "Sí, siempre y cuando el conductor de la bicicleta se sujete a la parte posterior del auto, pero nunca a la parte lateral de éste.",
      },
      {
        code: "b",
        description:
          "Sí, siempre y cuando se prevean todas las medidas de seguridad respectivas.",
      },
      {
        code: "c",
        description:
          "Sí, siempre y cuando esta acción sea realizada a una velocidad no mayor a",
      },
      {
        code: "d",
        description:
          "No, es una acción prohibida y quien la cometa puede ser sancionado con una multa.",
      },
    ],
    answer: "d",
  },
  {
    n: 88,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si usted desea realizar una competencia de carreras entre su vehículo y otro vehículo motorizado; para ello puede utilizar:",
    options: [
      {
        code: "a",
        description:
          "Las vías aledañas del parque del distrito en el cual reside, en el horario de 11:00 pm. a 5:00 am.",
      },
      {
        code: "b",
        description:
          "Un circuito de carrera, autódromo o pista de aceleración autorizado por la autoridad competente.",
      },
      {
        code: "c",
        description:
          "Las vías aledañas del parque del distrito en el cual reside, siempre y cuando tenga el permiso municipal correspondiente.",
      },
      { code: "d", description: "Todas las alternativas son correctas." },
    ],
    answer: "b",
  },
  {
    n: 89,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Señale cuáles de las siguientes conductas constituye una infracción al tránsito:",
    options: [
      {
        code: "a",
        description:
          "Tener la puerta, capot o maletera del vehículo abierta, cuando el vehículo está en marcha.",
      },
      {
        code: "b",
        description:
          "Conducir un vehículo lentamente por el carril de la izquierda causando congestión.",
      },
      {
        code: "c",
        description:
          "Conducir un vehículo con el motor en punto neutro o apagado.",
      },
      { code: "d", description: "Todas las alternativas son correctas." },
    ],
    answer: "d",
  },
  {
    n: 90,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "La marcas en el pavimento constituyen un elemento indispensable para la operación vehicular, pues su función es:",
    options: [
      {
        code: "a",
        description:
          "Reemplazar a la señalización vertical cuando ésta no se encuentra en la vía, por tal motivo son colocadas donde no existe señales verticales.",
      },
      {
        code: "b",
        description:
          "Guiar a los usuarios únicamente en las vías que presentan peligros.",
      },
      {
        code: "c",
        description:
          "Reglamentar la circulación, así como advertir y guiar a los usuarios de la vía.",
      },
      { code: "d", description: "Todas las alternativas son correctas." },
    ],
    answer: "c",
  },
  {
    n: 91,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Las marcas en el pavimento de color ____ complementan las señales informativas, como por ejemplo las zonas de estacionamiento para personas con movilidad reducida.",
    options: [
      { code: "a", description: "Blanco." },
      { code: "b", description: "Azul." },
      { code: "c", description: "Rojo." },
      { code: "d", description: "Gris." },
    ],
    answer: "b",
  },
  {
    n: 92,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "La línea central de color amarillo en el pavimento es continua cuando:",
    options: [
      { code: "a", description: "No está permitido cruzar al otro carril." },
      {
        code: "b",
        description:
          "Está permitido cruzar al otro carril para el adelantamiento.",
      },
      {
        code: "c",
        description:
          "Se trata de una vía de doble sentido de circulación, que permite cruzar al otro carril.",
      },
      {
        code: "d",
        description: "Separa corrientes de tráfico en el mismo sentido.",
      },
    ],
    answer: "a",
  },
  {
    n: 93,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si un conductor que circula por el carril derecho de una vía se encuentra con las flechas inclinadas que se muestran en la figura, su conducta correcta es:",
    image: ImgQuestion10,
    options: [
      {
        code: "a",
        description:
          "Continuar la circulación por el carril en que se encuentra.",
      },
      {
        code: "b",
        description:
          "Adelantar al vehículo que se encuentra delante de él y que circula por el carril izquierdo.",
      },
      {
        code: "c",
        description:
          "No adelantar al vehículo que tiene adelante y que circula por el carril izquierdo y continuar por su carril.",
      },
      {
        code: "d",
        description: "Cambiarse al carril izquierdo con precaución.",
      },
    ],
    answer: "d",
  },
  {
    n: 94,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si durante la conducción vehicular, un efectivo de la Policía de Tránsito le solicita al conductor someterse a una prueba de alcoholemia; la acción correcta del conductor es:",
    options: [
      {
        code: "a",
        description:
          "Someterse a la prueba de alcoholemia, ya que está obligado a ello ante la solicitud del efectivo de la Policía de Tránsito.",
      },
      {
        code: "b",
        description:
          "Someterse o negarse a la prueba de alcoholemia, ya que no constituye una obligación del conductor realizarse dicha prueba.",
      },
      {
        code: "c",
        description:
          "Negarse a la prueba de alcoholemia, ya que únicamente es exigible si ha participado en un accidente de tránsito.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "a",
  },
  {
    n: 95,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "¿Cuál de las siguientes conductas no es una infracción de tránsito?",
    options: [
      {
        code: "a",
        description:
          "Llevar las placas de rodaje en el lugar que no corresponde.",
      },
      {
        code: "b",
        description:
          "Seguir a los vehículos de emergencia y vehículos oficiales para avanzar más rápidamente.",
      },
      {
        code: "c",
        description:
          "Arrojar objetos en la vía pública que dificulten la circulación.",
      },
      {
        code: "d",
        description:
          "Detenerse totalmente en una señal de PARE cuando no hay peatones y/o vehículos circulando por la vía transversal.",
      },
    ],
    answer: "d",
  },
  {
    n: 96,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si un conductor sale de su propiedad y tiene que cruzar la acera e ingresar a una vía, la conducta correcta es:",
    options: [
      {
        code: "a",
        description:
          "Dar preferencia de paso solo a los vehículos que circulan por la vía, pero no a los peatones.",
      },
      {
        code: "b",
        description:
          "Dar preferencia de paso a los vehículos que circulan por la vía y a los peatones que circulan por la acera.",
      },
      {
        code: "c",
        description:
          "Tocar el claxon para advertir a los peatones que circulan por la acera, que se detengan.",
      },
      {
        code: "d",
        description: "Salir rápidamente, a fin de evitar accidentes.",
      },
    ],
    answer: "b",
  },
  {
    n: 97,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "¿Qué significa una línea continua blanca pintada entre el carril de la derecha y la berma de una carretera?",
    options: [
      { code: "a", description: "Un carril para motocicletas." },
      {
        code: "b",
        description:
          "Una línea que divide el área peatonal y el área de vehículos.",
      },
      {
        code: "c",
        description:
          "Una línea que puede cruzarse para rebasar en caso de congestión.",
      },
      {
        code: "d",
        description:
          "Que no se debe conducir atravesándola, al menos que haya una situación de emergencia.",
      },
    ],
    answer: "d",
  },
  {
    n: 98,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si maneja de noche, hubiera neblina y tuviera luces rompenieblas, debe utilizar:",
    options: [
      { code: "a", description: "Las luces bajas junto con las rompenieblas." },
      { code: "b", description: "Solo las luces altas." },
      { code: "c", description: "Solo las luces bajas." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "a",
  },
  {
    n: 99,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "En el caso representado en el siguiente gráfico ¿el vehículo rojo puede rebasar al azul?",
    image: ImgQuestion11,
    options: [
      {
        code: "a",
        description:
          "Puede hacerlo si no viene un vehículo en el sentido contrario.",
      },
      {
        code: "b",
        description:
          "Puede hacerlo solo si, el vehículo en sentido contrario está lejos y alcanza hacer la maniobra con seguridad.",
      },
      { code: "c", description: "No puede hacerlo." },
      { code: "d", description: "Puede hacerlo por la izquierda." },
    ],
    answer: "c",
  },
  {
    n: 100,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (R-17), significa:",
    image: ImgQuestion12,
    options: [
      { code: "a", description: "Prohibido estacionar." },
      {
        code: "b",
        description: "Prohibida la circulación de vehículos automotores.",
      },
      {
        code: "c",
        description: "Prohibida la circulación de autos particulares.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "b",
  },
  {
    n: 101,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si usted se encuentra conduciendo su vehículo por una vía y antes de cruzar la intersección se encuentra con la señal R-4, esta le indica:",
    image: ImgQuestion13,
    options: [
      { code: "a", description: "Que la calle está clausurada." },
      {
        code: "b",
        description:
          "Que está por ingresar a una vía de sentido contrario y no debe entrar.",
      },
      {
        code: "c",
        description: "Que debe parar totalmente antes de poder ingresar.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta" },
    ],
    answer: "b",
  },
  {
    n: 102,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (P-36), significa:",
    image: ImgQuestion14,
    options: [
      { code: "a", description: "Proximidad de un túnel." },
      { code: "b", description: "Superficie deslizante." },
      { code: "c", description: "Prender las luces bajas." },
      {
        code: "d",
        description: "Mantener la distancia entre vehículos por seguridad.",
      },
    ],
    answer: "b",
  },
  {
    n: 103,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (R-14), significa:",
    image: ImgQuestion15,
    options: [
      { code: "a", description: "Circular por el carril de la derecha." },
      { code: "b", description: "Circular por el carril central." },
      {
        code: "c",
        description: "Circular solo en el sentido indicado por la flecha.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "c",
  },
  {
    n: 104,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si usted circula por una vía y se encuentra con la señal (R-11a), ésta le indica:",
    image: ImgQuestion16,
    options: [
      {
        code: "a",
        description: "Que es una vía de tres carriles de un solo sentido.",
      },
      {
        code: "b",
        description:
          "Que es una vía de tres carriles y usted puede utilizar solo uno de ellos.",
      },
      {
        code: "c",
        description:
          "Que es una vía de tres carriles y usted puede utilizar los dos de la derecha.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "c",
  },
  {
    n: 105,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (R-30c), significa:",
    image: ImgQuestion17,
    options: [
      {
        code: "a",
        description: "Que la velocidad máxima de la vía es de 50 km/h.",
      },
      {
        code: "b",
        description: "Que la velocidad mínima de la vía es de 50 km/h.",
      },
      {
        code: "c",
        description:
          "Que al salir de la vía por donde está circulando, la velocidad máxima es 50 km/h.",
      },
      {
        code: "d",
        description:
          "Que al salir de la vía por donde está circulando, la velocidad mínima es 50 km/h.",
      },
    ],
    answer: "c",
  },
  {
    n: 106,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (R-5-4), significa:",
    image: ImgQuestion18,
    options: [
      {
        code: "a",
        description:
          "Que la vía no continúa y los conductores deben girar a la izquierda.",
      },
      {
        code: "b",
        description:
          "Que la intersección contempla giros tangentes a la izquierda en ambos sentidos.",
      },
      {
        code: "c",
        description:
          "Que la intersección está en mantenimiento y que por el momento solo se puede girar a la izquierda.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "b",
  },
  {
    n: 107,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (R-9), significa:",
    image: ImgQuestion19,
    options: [
      { code: "a", description: "Que no está permitido girar en U." },
      { code: "b", description: "Que está permitido el giro en U." },
      { code: "c", description: "Que si desea puede girar a la izquierda." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "b",
  },
  {
    n: 108,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (R-5-2), significa:",
    image: ImgQuestion20,
    options: [
      {
        code: "a",
        description: "Que la vía solo permite girar a la izquierda.",
      },
      { code: "b", description: "Prevención por bifurcación de la vía." },
      {
        code: "c",
        description:
          "Que el carril por donde circula permite girar a la izquierda o seguir de frente.",
      },
      { code: "d", description: "No es una señal válida en el Perú." },
    ],
    answer: "c",
  },
  {
    n: 109,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (R-20), significa:",
    image: ImgQuestion21,
    options: [
      {
        code: "a",
        description:
          "Que el peatón antes de cruzar debe mirar si se acercan autos por la derecha.",
      },
      {
        code: "b",
        description:
          "Que el conductor que viene por la derecha debe tener cuidado con los peatones.",
      },
      {
        code: "c",
        description: "Que los peatones deben circular por la izquierda.",
      },
      {
        code: "d",
        description: "Que los peatones deben circular por la derecha.",
      },
    ],
    answer: "c",
  },
  {
    n: 110,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (R-40), significa:",
    image: ImgQuestion22,
    options: [
      { code: "a", description: "Crucero tipo cebra." },
      { code: "b", description: "Control policial." },
      { code: "c", description: "Pavimento deslizante." },
      { code: "d", description: "Circular con luces bajas." },
    ],
    answer: "d",
  },
  {
    n: 111,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (R-48), significa:",
    image: ImgQuestion23,
    options: [
      {
        code: "a",
        description:
          "Los peatones deben circular por la derecha y los camiones por la izquierda",
      },
      {
        code: "b",
        description: "Los peatones deben tener cuidado con los camiones.",
      },
      { code: "c", description: "Zona de carga y descarga." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "c",
  },
  {
    n: 112,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (R-49), significa:",
    image: ImgQuestion24,
    options: [
      {
        code: "a",
        description:
          "Está permitido cambiar de carril por la izquierda y por la derecha.",
      },
      {
        code: "b",
        description:
          "Se debe mantener la distancia de seguridad entre vehículos.",
      },
      {
        code: "c",
        description:
          "Está permitido cambiar de carril por la izquierda para adelantar.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "b",
  },
  {
    n: 113,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (R-50), significa:",
    image: ImgQuestion25,
    options: [
      {
        code: "a",
        description:
          "Que si solo hay un carril tiene preferencia de paso el conductor que llegó primero.",
      },
      {
        code: "b",
        description:
          "Que si solo hay un carril tiene preferencia el conductor que está mirando la señal.",
      },
      {
        code: "c",
        description:
          "Que si solo hay un carril no tiene preferencia el que está mirando la señal y debe darle paso al del sentido contrario.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "c",
  },
  {
    n: 114,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La señal (R-5-1), es:",
    image: ImgQuestion26,
    options: [
      { code: "a", description: "Una señal informativa." },
      { code: "b", description: "Una señal preventiva." },
      { code: "c", description: "Una señal de obligación." },
      { code: "d", description: "No es una señal válida en el Perú." },
    ],
    answer: "c",
  },
  {
    n: 115,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La señal (P-3a), le indica al conductor que:",
    image: ImgQuestion27,
    options: [
      {
        code: "a",
        description: "Hay una curva y contra-curva a la izquierda.",
      },
      { code: "b", description: "Hay una curva y contra-curva a la derecha." },
      {
        code: "c",
        description: "Hay una curva y contra-curva pronunciada a la derecha.",
      },
      {
        code: "d",
        description: "Hay una curva y contra-curva pronunciada a la izquierda.",
      },
    ],
    answer: "c",
  },
  {
    n: 116,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (P-5-1a), le advierte al conductor que:",
    image: ImgQuestion28,
    options: [
      {
        code: "a",
        description: "Se aproxima a una curva y contra-curva a la izquierda.",
      },
      {
        code: "b",
        description: "Se aproxima a una curva y contra-curva a la derecha.",
      },
      {
        code: "c",
        description: "Se aproxima a un camino sinuoso a la derecha.",
      },
      {
        code: "d",
        description: "Se aproxima a un camino sinuoso a la izquierda.",
      },
    ],
    answer: "d",
  },
  {
    n: 117,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (P-61), le advierte al conductor que:",
    image: ImgQuestion29,
    options: [
      {
        code: "a",
        description: "El sentido del tránsito es el que indica la flecha.",
      },
      {
        code: "b",
        description: "Se aproxima a una reducción de la vía en ambos sentidos.",
      },
      { code: "c", description: "Está circulando por una curva horizontal." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "c",
  },
  {
    n: 118,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (P-34), le advierte al conductor que:",
    image: ImgQuestion30,
    options: [
      { code: "a", description: "La vía está en mal estado y tiene baches." },
      { code: "b", description: "Se aproxima a un resalto." },
      { code: "c", description: "Se aproxima a un rompe muelles." },
      { code: "d", description: "Se aproxima a un badén." },
    ],
    answer: "d",
  },
  {
    n: 119,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (P-60), es:",
    image: ImgQuestion31,
    options: [
      { code: "a", description: "Una señal turística." },
      { code: "b", description: "Una señal informativa." },
      { code: "c", description: "Una señal preventiva." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "c",
  },
  {
    n: 120,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (P-46), indica:",
    image: ImgQuestion32,
    options: [
      { code: "a", description: "Existencia de una ciclovía." },
      { code: "b", description: "Autorización para el cruce de ciclistas." },
      { code: "c", description: "Ciclistas en la vía." },
      { code: "d", description: "Cercanía de una ciclovía." },
    ],
    answer: "c",
  },
  {
    n: 121,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (P-46-a), indica:",
    image: ImgQuestion33,
    options: [
      { code: "a", description: "Que los ciclistas deben usar la ciclovía." },
      { code: "b", description: "Que nos aproximamos a un cruce de ciclovía." },
      { code: "c", description: "Que la ciclovía es solo para los ciclistas." },
      { code: "d", description: "Todas las alternativas son correctas." },
    ],
    answer: "b",
  },
  {
    n: 122,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (P-46b), indica:",
    image: ImgQuestion34,
    options: [
      {
        code: "a",
        description: "Que los ciclistas deben detenerse en ese punto.",
      },
      { code: "b", description: "Que nos aproximamos a un cruce de ciclovía." },
      { code: "c", description: "Que la ciclovía es solo para los ciclistas." },
      { code: "d", description: "La ubicación de un cruce de ciclistas." },
    ],
    answer: "d",
  },
  {
    n: 123,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (P-48), indica:",
    image: ImgQuestion35,
    options: [
      { code: "a", description: "Vía es de uso exclusivo de los peatones." },
      { code: "b", description: "Zona con presencia de peatones." },
      { code: "c", description: "Ubicación de un cruce escolar." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "b",
  },
  {
    n: 124,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (P-48a), indica:",
    image: ImgQuestion36,
    options: [
      { code: "a", description: "Vía es de uso exclusivo de peatones." },
      { code: "b", description: "Proximidad a un cruce peatonal." },
      { code: "c", description: "Ubicación de un cruce escolar." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "b",
  },
  {
    n: 125,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (P-48-b), indica:",
    image: ImgQuestion37,
    options: [
      { code: "a", description: "Ubicación de un cruce escolar." },
      { code: "b", description: "Proximidad a una calzada." },
      { code: "c", description: "Ubicación de un cruce peatonal." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "c",
  },
  {
    n: 126,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (P-49), indica:",
    image: ImgQuestion38,
    options: [
      { code: "a", description: "Zona escolar." },
      { code: "b", description: "Proximidad a un cruce peatonal." },
      { code: "c", description: "Zona transitada." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "a",
  },
  {
    n: 127,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (P-49a), indica:",
    image: ImgQuestion39,
    options: [
      { code: "a", description: "Zona escolar." },
      { code: "b", description: "Proximidad a un cruce escolar." },
      { code: "c", description: "Ubicación de un cruce escolar." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "b",
  },
  {
    n: 128,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (P-49b), indica:",
    image: ImgQuestion40,
    options: [
      { code: "a", description: "Zona transitada." },
      { code: "b", description: "Proximidad a un cruce peatonal." },
      { code: "c", description: "Ubicación de un cruce escolar" },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "c",
  },
  {
    n: 129,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (P-50), indica:",
    image: ImgQuestion41,
    options: [
      { code: "a", description: "Zona de deportes." },
      { code: "b", description: "Proximidad a campo deportivo." },
      { code: "c", description: "Proximidad a zona urbana." },
      { code: "d", description: "Niños jugando." },
    ],
    answer: "d",
  },
  {
    n: 130,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (P-51), indica:",
    image: ImgQuestion42,
    options: [
      { code: "a", description: "Zona de parqueo de vehículos pesados." },
      { code: "b", description: "Proximidad a zona rural." },
      { code: "c", description: "Maquinaria agrícola en la vía." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "c",
  },
  {
    n: 131,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (P-53), indica:",
    image: ImgQuestion43,
    options: [
      { code: "a", description: "Proximidad a un establo." },
      { code: "b", description: "Proximidad a zona agrícola." },
      { code: "c", description: "Animales en la vía." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "c",
  },
  {
    n: 132,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (P-55), indica:",
    image: ImgQuestion44,
    options: [
      { code: "a", description: "Semáforo malogrado." },
      { code: "b", description: "Proximidad a un semáforo." },
      { code: "c", description: "Semáforos en ola verde." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "b",
  },
  {
    n: 133,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (P-58), le indica:",
    image: ImgQuestion45,
    options: [
      { code: "a", description: "Que usted se aproxima a una señal de PARE." },
      {
        code: "b",
        description: "Que usted debe parar donde está la señal P-58.",
      },
      {
        code: "c",
        description: "Que se trata de un PARE, pero puede seguir adelante.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "a",
  },
  {
    n: 134,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (P-59), le indica:",
    image: ImgQuestion46,
    options: [
      {
        code: "a",
        description: "Que usted se aproxima a una señal de CEDA EL PASO.",
      },
      {
        code: "b",
        description: "Que usted debe ceder el paso donde está la señal P-59.",
      },
      {
        code: "c",
        description: "Que se trata de un PARE, pero puede seguir adelante.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "a",
  },
  {
    n: 135,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (P-41), le indica:",
    image: ImgQuestion47,
    options: [
      {
        code: "a",
        description: "Que usted se aproxima a una zona de camiones.",
      },
      {
        code: "b",
        description:
          "Que usted debe encender sus luces pues se aproxima a una zona con poca visibilidad.",
      },
      { code: "c", description: "Que usted se aproxima a un túnel." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "c",
  },
  {
    n: 136,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (P-45), indica:",
    image: ImgQuestion48,
    options: [
      { code: "a", description: "Proximidad a un aeropuerto." },
      { code: "b", description: "Proximidad a una pista de aviones." },
      { code: "c", description: "Vuelo de aviones a baja altura." },
      { code: "d", description: "Aviones que generan ruido." },
    ],
    answer: "c",
  },
  {
    n: 137,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (P-52), le indica:",
    image: ImgQuestion49,
    options: [
      {
        code: "a",
        description: "Que usted debe dar prioridad de paso a las ambulancias.",
      },
      {
        code: "b",
        description: "Que usted debe dar prioridad de paso a los bomberos.",
      },
      {
        code: "c",
        description: "Que se aproxima a una salida de vehículos de bomberos.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "c",
  },
  {
    n: 138,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (P-66), le indica:",
    image: ImgQuestion50,
    options: [
      { code: "a", description: "Que se aproxima un desierto." },
      {
        code: "b",
        description:
          "Que se aproxima una zona donde hay ráfagas de viento lateral.",
      },
      {
        code: "c",
        description: "Que se acerca a una zona de arenamiento en la vía.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "b",
  },
  {
    n: 139,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (P-66a), le indica:",
    image: ImgQuestion51,
    options: [
      { code: "a", description: "Que se aproxima una tormenta." },
      {
        code: "b",
        description:
          "Que está pasando por una zona donde hay ráfagas de viento lateral.",
      },
      {
        code: "c",
        description: "Que se acerca a una zona de arenamiento en la vía.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "c",
  },
  {
    n: 140,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si al conducir su vehículo se encuentra con la señal vertical que se muestra, usted debe entender que:",
    image: ImgQuestion52,
    options: [
      {
        code: "a",
        description:
          "La vía está interrumpida y debe tomar el camino alternativo que muestra la señal.",
      },
      {
        code: "b",
        description:
          "En la siguiente intersección está prohibido girar a la izquierda y por lo tanto, si desea seguir esa ruta debe tomar el camino alternativo que muestra la señal.",
      },
      {
        code: "c",
        description:
          "En la siguiente intersección está prohibido girar a la derecha y por lo tanto, si desea seguir esa ruta debe tomar el camino alternativo que muestra la señal.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "b",
  },
  {
    n: 141,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si al conducir su vehículo se encuentra con la señal vertical que se muestra, usted debe entender que:",
    image: ImgQuestion53,
    options: [
      {
        code: "a",
        description:
          "Si quiere girar a la izquierda debe pasar la intersección y dar la vuelta a la manzana.",
      },
      {
        code: "b",
        description:
          "En la siguiente intersección está prohibido girar a la izquierda y por lo tanto, si desea seguir esa ruta debe hacerlo una cuadra antes.",
      },
      { code: "c", description: "En esa dirección hay una zona de parqueo." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "a",
  },
  {
    n: 142,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (I-14), significa:",
    image: ImgQuestion54,
    options: [
      { code: "a", description: "Señal de hostal." },
      { code: "b", description: "Señal de hospedaje." },
      { code: "c", description: "Señal de hospital." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "c",
  },
  {
    n: 143,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (I-31), significa:",
    image: ImgQuestion55,
    options: [
      { code: "a", description: "Proximidad de una bahía de taxis." },
      { code: "b", description: "Proximidad a un estacionamiento permitido." },
      {
        code: "c",
        description: "Proximidad de una zona de parqueo para vecinos.",
      },
      {
        code: "d",
        description: "Proximidad de un estacionamiento para emergencias.",
      },
    ],
    answer: "d",
  },
  {
    n: 144,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (I-9), significa:",
    image: ImgQuestion56,
    options: [
      { code: "a", description: "Zona de control policial." },
      { code: "b", description: "Zona de control de aduanas." },
      { code: "c", description: "Zona militar." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "c",
  },
  {
    n: 145,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (I-18), se utiliza para indicar:",
    image: ImgQuestion57,
    options: [
      { code: "a", description: "Cercanía a una ferretería." },
      { code: "b", description: "Cercanía a un servicio mecánico." },
      { code: "c", description: "Cercanía a un grifo." },
      { code: "d", description: "Ninguna de las alternativas es correcta" },
    ],
    answer: "b",
  },
  {
    n: 146,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (I-19), se utiliza para indicar:",
    image: ImgQuestion58,
    options: [
      { code: "a", description: "Cercanía a un servicio mecánico." },
      { code: "b", description: "Cercanía a una tienda." },
      { code: "c", description: "Cercanía a un grifo." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "c",
  },
  {
    n: 147,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (I-20), se utiliza para indicar:",
    image: ImgQuestion59,
    options: [
      { code: "a", description: "Cercanía a un servicio mecánico." },
      {
        code: "b",
        description:
          "Cercanía a una zona donde debe circular con cadenas en las llantas.",
      },
      { code: "c", description: "Cercanía a un grifo." },
      { code: "d", description: "Cercanía a una llantería." },
    ],
    answer: "d",
  },
  {
    n: 148,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (R-16a), se utiliza para indicar:",
    image: ImgQuestion60,
    options: [
      {
        code: "a",
        description: "Fin de la restricción de circulación de automotores.",
      },
      {
        code: "b",
        description: "Fin de la restricción de prohibido adelantar.",
      },
      {
        code: "c",
        description: "Fin de la restricción de circulación en doble sentido.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "b",
  },
  {
    n: 149,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "El comportamiento del conductor como usuario de la vía, debe estar orientado a:",
    options: [
      { code: "a", description: "Valor por la vida." },
      {
        code: "b",
        description:
          "Respeto por la integridad física del resto de los usuarios.",
      },
      {
        code: "c",
        description:
          "Respeto a la autoridad encargada de la vigilancia y disciplina de tráfico.",
      },
      { code: "d", description: "Todas las alternativas son correctas." },
    ],
    answer: "d",
  },
  {
    n: 150,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Son considerados usuarios vulnerables de la vía y por tanto merecen especial protección:",
    options: [
      {
        code: "a",
        description:
          "Peatones, niños, adultos mayores, personas con movilidad reducida, ciclistas.",
      },
      { code: "b", description: "Únicamente los peatones y ciclistas." },
      { code: "c", description: "Únicamente los peatones y niños." },
      {
        code: "d",
        description:
          "Todas las alternativas son correctas, con excepción de los ciclistas.",
      },
    ],
    answer: "a",
  },
  {
    n: 151,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (P-61), muestra:",
    image: ImgQuestion61,
    options: [
      {
        code: "a",
        description: "Flechas retroreflectivas que indican peligro.",
      },
      {
        code: "b",
        description: "Delineadores de curva, que guían al conductor.",
      },
      {
        code: "c",
        description:
          "Advertencia al conductor sobre la proximidad de un puente.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "b",
  },
  {
    n: 152,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si usted es titular de una licencia particular A-I, está autorizado a conducir el siguiente vehículo:",
    options: [
      { code: "a", description: "Camión, tipo volquete." },
      { code: "b", description: "Ómnibus, tipo panorámico." },
      { code: "c", description: "Mototaxi." },
      { code: "d", description: "Automóvil, tipo sedan." },
    ],
    answer: "d",
  },
  {
    n: 153,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "Mientras la persona conduce, le está permitido:",
    options: [
      {
        code: "a",
        description:
          "Compartir su asiento con un niño, siempre y cuando éste sea menor de un año de edad.",
      },
      {
        code: "b",
        description:
          "Que otra persona tome el control de la dirección del vehículo, siempre y",
      },
      {
        code: "c",
        description:
          "Conducir con una mano sobre el volante de dirección, cuando es necesario accionar algún comando del vehículo, como realizar los cambios de velocidad.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "c",
  },
  {
    n: 154,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "El conductor está ____ a las pruebas que le solicite el Efectivo de la Policía Nacional del Perú, asignado al control del tránsito, para determinar su estado de intoxicação por álcool, drogas, estupefacientes u otros tóxicos",
    options: [
      { code: "a", description: "En su derecho - negarse." },
      { code: "b", description: "Facultado - Rechazar." },
      { code: "c", description: "Obligado - someterse." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "c",
  },
  {
    n: 155,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Ante un conductor con evidente discapacidad física, la cual no figura en el rubro de restricciones de su licencia de conducir, procede:",
    options: [
      {
        code: "a",
        description:
          "Que la Policía de Tránsito intervenga a dicho conductor y que la autoridad que expidió la licencia de conducir ordene su reexaminación.",
      },
      {
        code: "b",
        description:
          "Que la autoridad competente expida un permiso excepcional para dicho conductor.",
      },
      {
        code: "c",
        description:
          "Que la Policía de Tránsito expida un permiso excepcional para dicho conductor.",
      },
      {
        code: "d",
        description:
          "Que la Policía de Tránsito otorgue a dicho conductor un plazo prudencial para que continúe conduciendo.",
      },
    ],
    answer: "a",
  },
  {
    n: 156,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "¿Una persona con discapacidad física puede obtener una licencia de conducir particular?",
    options: [
      {
        code: "a",
        description:
          "Sí, siempre y cuando dicha discapacidad pueda ser superada con algún corrector que establezca alguna de las restricciones que prevé la norma vigente.",
      },
      { code: "b", description: "No, está terminantemente prohibido." },
      {
        code: "c",
        description:
          "Depende del criterio del centro de emisión de la licencia de conducir.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "a",
  },
  {
    n: 157,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "¿Puede una persona menor de edad conducir un vehículo?",
    options: [
      { code: "a", description: "Nunca." },
      {
        code: "b",
        description:
          "Sí, siempre y cuando vaya acompañada de una personas mayor de edad y titular de una licencia de conducir.",
      },
      {
        code: "c",
        description:
          "No, salvo que conduzca un vehículo de dimensión reducida.",
      },
      {
        code: "d",
        description:
          "Sí, siempre y cuando sea mayor de 16 años y cuente con licencia de conducir o permiso provisional, conforme a lo dispuesto en el Reglamento Nacional del Sistema de Emisión de Licencias de Conducir.",
      },
    ],
    answer: "d",
  },
  {
    n: 158,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Es una obligación general de tránsito que, los ____ circulen respetando los mensajes de ____ las instrucciones de los Efectivos de la Policía de Tránsito y el mandato de las normas legales y reglamentarias correspondientes.",
    options: [
      {
        code: "a",
        description: "Peatones - los letreros instalados en las vías públicas.",
      },
      {
        code: "b",
        description:
          "Los usuarios de la vía pública - los dispositivos de control de tránsito.",
      },
      { code: "c", description: "Vehículos - los medios de comunicación." },
      { code: "d", description: "Menores de edad - los adultos mayores." },
    ],
    answer: "b",
  },
  {
    n: 159,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "Marque la afirmación incorrecta:",
    options: [
      {
        code: "a",
        description:
          "Está prohibido arrojar, depositar o abandonar objetos en la vía pública, o cualquier otro obstáculo que pueda dificultar la circulación.",
      },
      {
        code: "b",
        description:
          "El conductor debe mantener el vehículo que conduce con el combustible necesario para evitar detenciones en la vía.",
      },
      {
        code: "c",
        description:
          "Los vehículos deben circular en vías urbanas con las luces bajas las 24 horas del día.",
      },
      {
        code: "d",
        description:
          "En caso de haber agua en la calzada, el conductor de un vehículo debe tomar las precauciones, para evitar que ésta pueda mojar la acera y los peatones.",
      },
    ],
    answer: "c",
  },
  {
    n: 160,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "¿Si al conducir por una avenida se encuentra con una señal en la vía que indica un límite máximo de 50 km/h, sin embargo, conforme a lo dispuesto en la norma el límite máximo de velocidad en dicha vía es de 60 km/h; usted:",
    options: [
      {
        code: "a",
        description: "Debe obedecer la señal de velocidad instalada en la vía.",
      },
      { code: "b", description: "Puede ir a una velocidad máxima de 60 km/h." },
      { code: "c", description: "Debe ir a una velocidad máxima de 60 km/h." },
      { code: "d", description: "Debe ir a una velocidad entre 50 y 60 km/h." },
    ],
    answer: "a",
  },
  {
    n: 161,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "Sobre la conducción en retroceso, marque la opción correcta:",
    options: [
      {
        code: "a",
        description:
          "Está prohibida, salvo en casos estrictamente justificados.",
      },
      { code: "b", description: "Nunca debe realizarse." },
      { code: "c", description: "Está permitida" },
      { code: "d", description: "Está permitida, salvo en carreteras." },
    ],
    answer: "a",
  },
  {
    n: 162,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "El uso de la luz ____ es obligatorio en ____, debiendo cambiar por luz ____ momentos previos al cruce con otro vehículo que circule en sentido contrario.",
    options: [
      { code: "a", description: "Baja - carreteras - alta." },
      { code: "b", description: "Alta - vías urbanas - baja." },
      { code: "c", description: "Rompenieblas - carreteras - baja." },
      { code: "d", description: "Alta - carretereras - baja." },
    ],
    answer: "d",
  },
  {
    n: 163,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "Indique la conducta permitida:",
    options: [
      {
        code: "a",
        description:
          "El estacionamiento de un vehículo a la salida de salas de espectáculos en funcionamiento.",
      },
      {
        code: "b",
        description:
          "El estacionamiento de un vehículo de emergencia en un lugar no permitido, si ello fuera imprescindible.",
      },
      {
        code: "c",
        description:
          "El estacionamiento de un vehículo después de 1 metro de un paso peatonal.",
      },
      {
        code: "d",
        description: "El estacionamiento de un vehículo sobre las aceras.",
      },
    ],
    answer: "b",
  },
  {
    n: 164,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "Se considera el abandono de un vehículo cuando:",
    options: [
      {
        code: "a",
        description:
          "El vehículo está estacionado en un lugar permitido en la vía pública, pero sin conductor por un tiempo mayor de 72 horas.",
      },
      {
        code: "b",
        description:
          "El vehículo está estacionado en un lugar permitido en la vía pública, pero sin conductor por un tiempo mayor de 96 horas.",
      },
      {
        code: "c",
        description:
          "El vehículo está estacionado en un lugar permitido en la vía pública, pero sin conductor y por un tiempo mayor de 48 horas.",
      },
      {
        code: "d",
        description:
          "La norma de tránsito no establece nada sobre el abandono del vehículo.",
      },
    ],
    answer: "c",
  },
  {
    n: 165,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "Al transportar carga en su vehículo, usted debe:",
    options: [
      {
        code: "a",
        description:
          "Asegurarse, en caso la carga sobresalga lateralmente de la carrocería, esté bien sujeta.",
      },
      {
        code: "b",
        description:
          "Evitar todo riesgo de caída de la carga que sobresale lateralmente de la carrocería.",
      },
      { code: "c", description: "Tratar que la carga no sea arrastrada." },
      {
        code: "d",
        description:
          "Asegurarse que la carga no sobrepase las dimensiones de la carrocería.",
      },
    ],
    answer: "d",
  },
  {
    n: 166,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Sobre la emisión vehicular de sustancias contaminantes, marque la opción correcta:",
    options: [
      { code: "a", description: "Está permitida." },
      {
        code: "b",
        description:
          "Está prohibida, en un índice superior al límite máximo que permite la norma.",
      },
      { code: "c", description: "Está prohibida en el ámbito urbano." },
      { code: "d", description: "La norma no regula sobre ello." },
    ],
    answer: "b",
  },
  {
    n: 167,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "La autoridad competente, ____ puede prohibir o restringir ____ en determinadas vías públicas.",
    options: [
      {
        code: "a",
        description:
          "Cuando la situación lo justifique la circulación o estacionamiento de vehículos.",
      },
      {
        code: "b",
        description:
          "Aun cuando la situación lo justifique no - circulación o estacionamiento de vehículos.",
      },
      {
        code: "c",
        description: "No se encuentra facultada ni - circulación de vehículos",
      },
      {
        code: "d",
        description:
          "Únicamente con el consentimiento del conductor - circulación de vehículos.",
      },
    ],
    answer: "a",
  },
  {
    n: 168,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si al conducir en una carretera de noche se aproxima un vehículo en sentido contrario; usted debe:",
    options: [
      { code: "a", description: "Cambiar de luces bajas a luces altas" },
      { code: "b", description: "Encender las luces de emergencia." },
      { code: "c", description: "Cambiar de luces altas a luces bajas." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "c",
  },
  {
    n: 169,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La detención de un vehículo debe efectuarse:",
    options: [
      {
        code: "a",
        description:
          "En el sentido contrario a la circulación y en el carril izquierdo de la vía.",
      },
      {
        code: "b",
        description:
          "En el sentido de la circulación y en el carril derecho de la vía, utilizando las luces altas.",
      },
      {
        code: "c",
        description:
          "En el sentido de la circulación y en el carril izquierdo de la vía, utilizando las luces intermitentes.",
      },
      {
        code: "d",
        description:
          "En el sentido de la circulación y en el carril derecho de la vía, utilizando las luces intermitentes.",
      },
    ],
    answer: "d",
  },
  {
    n: 170,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "En caso de un accidente de tránsito con daños personales y/o materiales los participantes deben:",
    options: [
      { code: "a", description: "Acudir a la estación de bomberos." },
      { code: "b", description: "Llamar a un familiar." },
      {
        code: "c",
        description: "Solicitar la intervención de la autoridad policial.",
      },
      {
        code: "d",
        description: "Abandonar el lugar donde ocurrió el accidente.",
      },
    ],
    answer: "c",
  },
  {
    n: 171,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "El conductor antes de iniciar la conducción de un vehículo no está obligado a:",
    options: [
      {
        code: "a",
        description:
          "Portar la tarjeta de identificación vehicular del vehículo que conduce.",
      },
      { code: "b", description: "Portar y exhibir la Placa Única de Rodaje." },
      {
        code: "c",
        description: "Constatar que el vehículo tiene SOAT vigente.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "d",
  },
  {
    n: 172,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "La ____ faculta y autoriza la circulación del vehículo por la vía pública, identifica el bien, y, por ende, al titular responsable de las acciones que deriven de su propiedad.",
    options: [
      { code: "a", description: "Tarjeta de identificación vehicular." },
      { code: "b", description: "Municipalidad provincial." },
      {
        code: "c",
        description:
          "La Superintendencia Nacional de Aduanas y de Administración Tributaria - SUNAT.",
      },
      { code: "d", description: "Placa Única Nacional de Rodaje." },
    ],
    answer: "d",
  },
  {
    n: 173,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "A fin de determinar la presencia de alcohol o sustancias estupefacientes en el conductor, el efectivo de la Policía de Tránsito puede exigirle al momento de la intervención:",
    options: [
      {
        code: "a",
        description: "Que realice pruebas de coordinación y equilibrio.",
      },
      { code: "b", description: "Uso del alcoholímetro." },
      { code: "c", description: "Prueba de alcoholemia." },
      { code: "d", description: "Todas las alternativas son correctas." },
    ],
    answer: "d",
  },
  {
    n: 174,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "¿El Reglamento Nacional de Tránsito considera la reincidencia en las infracciones de tránsito?",
    options: [
      {
        code: "a",
        description:
          "No, el conductor puede cometer la misma infracción varias veces y la sanción será la misma.",
      },
      {
        code: "b",
        description:
          "Si, cuando el conductor comete la misma infracción dentro de los 12 meses será sancionado con el doble de la multa.",
      },
      {
        code: "c",
        description:
          "Solo en los casos en que se cometan infracciones gravísimas.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "b",
  },
  {
    n: 175,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "¿Después de qué tiempo de haber cometido la misma infracción se llama reincidencia y es sancionada con el doble de la multa establecida?",
    options: [
      { code: "a", description: "06 meses." },
      { code: "b", description: "12 meses." },
      { code: "c", description: "24 meses." },
      { code: "d", description: "35 meses." },
    ],
    answer: "b",
  },
  {
    n: 176,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si a un conductor infractor le suspendieron su licencia de conducir, éste se encuentra facultado para:",
    options: [
      {
        code: "a",
        description: "Tramitar el duplicado de su licencia de conducir.",
      },
      {
        code: "b",
        description: "Tramitar la revalidación de su licencia de conducir.",
      },
      {
        code: "c",
        description: "Tramitar la recategorización de su licencia de conducir.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "d",
  },
  {
    n: 177,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Las ____ tienen por función informar a los usuarios sobre los servicios generales existentes próximos a la vía, tales como teléfono, hospedaje, restaurante, primeros auxilios, estación de combustibles, talleres, y otros.",
    options: [
      { code: "a", description: "Señales de localización." },
      { code: "b", description: "Señales de salida inmediata." },
      { code: "c", description: "Señales de servicios generales." },
      { code: "d", description: "Señales ordinarias" },
    ],
    answer: "c",
  },
  {
    n: 178,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "¿Constituye una infracción tramitar el duplicado de una licencia de conducir que se encuentra retenida?",
    options: [
      { code: "a", description: "No constituye una infracción." },
      {
        code: "b",
        description:
          "Solo cuando la licencia de conducir ha sido retenida por la comisión de una infracción muy grave.",
      },
      { code: "c", description: "Si, constituye una infracción." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "c",
  },
  {
    n: 179,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Las marcas en el pavimento constituyen la señalización ____ y se emplean para ____ la circulación.",
    options: [
      { code: "a", description: "Horizontal - reglamentar." },
      { code: "b", description: "Vertical - reglamentar." },
      { code: "c", description: "Más importante - mejorar." },
      { code: "d", description: "Menos importante - adornar." },
    ],
    answer: "a",
  },
  {
    n: 180,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "Ciclista es a ciclovía como:",
    options: [
      { code: "a", description: "Conductor - acera." },
      { code: "b", description: "Conductor - calzada." },
      { code: "c", description: "Conductor - berma." },
      { code: "d", description: "Peatón - autopista." },
    ],
    answer: "b",
  },
  {
    n: 181,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "La siguiente señal (P-15), se utiliza para advertir al conductor:",
    image: ImgQuestion62,
    options: [
      { code: "a", description: "La proximidad a una vía de tres carriles." },
      { code: "b", description: "La proximidad a un huracán." },
      { code: "c", description: "La proximidad a un camino sinuoso." },
      {
        code: "d",
        description:
          "La proximidad de una intersección rotatoria (óvalo o rotonda).",
      },
    ],
    answer: "d",
  },
  {
    n: 182,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "La siguiente señal (P-31a), indica:",
    image: ImgQuestion63,
    options: [
      { code: "a", description: "La proximidad del final de la vía." },
      { code: "b", description: "La proximidad de una vía asfaltada." },
      { code: "c", description: "La proximidad de una pendiente leve." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "a",
  },
  {
    n: 183,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Es una línea transversal a la calzada, que indica al conductor que debe detener completamente el vehículo, no debiendo sobrepasar el inicio de la indicada línea:",
    options: [
      { code: "a", description: "Línea de carril." },
      { code: "b", description: "Línea de borde de calzada." },
      { code: "c", description: "Línea de pare." },
      { code: "d", description: "Todas las alternativas son correctas." },
    ],
    answer: "c",
  },
  {
    n: 184,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "Los semáforos son:",
    options: [
      {
        code: "a",
        description:
          "Dispositivos de control del tránsito que tienen por finalidad regular y controlar el tránsito vehicular, motorizado y no motorizado, y el peatonal, a través de las indicaciones de las luces respectivas.",
      },
      {
        code: "b",
        description:
          "Dispositivos de control del tránsito que tienen por finalidad regular y controlar únicamente el tránsito vehicular motorizado y peatonal, a través de las indicaciones de luces.",
      },
      {
        code: "c",
        description:
          "Señales de color rojo, verde y amarillo, que tienen como único fin regular la corriente vehicular.",
      },
      {
        code: "d",
        description:
          "Artefactos que emiten luces de colores y cuyo único fin es regular la corriente de vehículos motorizados y peatones.",
      },
    ],
    answer: "a",
  },
  {
    n: 185,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "La conducción requiere un alto nivel de atención, pues existen distracciones que pueden ocasionar accidentes de tránsito, como por ejemplo:",
    options: [
      { code: "a", description: "Preocupaciones." },
      { code: "b", description: "Uso del teléfono celular." },
      {
        code: "c",
        description: "Manipulación de la radio mientras se conduce.",
      },
      { code: "d", description: "Todas las alternativas son correctas." },
    ],
    answer: "d",
  },
  {
    n: 186,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "¿Influye la somnolencia en la capacidad de conducir?",
    options: [
      {
        code: "a",
        description:
          "Si, pues el conductor tomará decisiones lentas que lo inducirán a cometer errores.",
      },
      { code: "b", description: "Si, ya que el conductor está de mal genio." },
      {
        code: "c",
        description: "No, siempre que la conducción sea realizada lentamente.",
      },
      {
        code: "d",
        description:
          "No, siempre y cuando la conducción sea realizada con un acompañante.",
      },
    ],
    answer: "a",
  },
  {
    n: 187,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "¿Cuál es la acción correcta del conductor, según las normas de tránsito, en la situación que plantea el siguiente gráfico?",
    image: ImgQuestion64,
    options: [
      {
        code: "a",
        description:
          "Girar rápidamente a la derecha antes que el peatón cruce la calzada.",
      },
      {
        code: "b",
        description:
          "Dar preferencia de paso al peatón para que cruce la calzada.",
      },
      {
        code: "c",
        description:
          "Girar lentamente a la derecha antes que el peatón cruce la calzada.",
      },
      {
        code: "d",
        description: "Tocar el claxon para que el peatón no cruce la calzada",
      },
    ],
    answer: "b",
  },
  {
    n: 188,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "¿En cuál de las siguientes opciones, los factores mencionados contribuyen a una colisión vehicular?",
    options: [
      {
        code: "a",
        description: "Pavimento seco, somnolencia, frenos desgastados.",
      },
      {
        code: "b",
        description: "Pavimento húmedo, neumáticos desgastados, cansancio.",
      },
      {
        code: "c",
        description:
          "Reductores de velocidad, falta de atención, uso del teléfono celular.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "b",
  },
  {
    n: 189,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "La ____ es la parte de una carretera o camino contigua a la calzada, no habilitada para la circulación de vehículos y destinada eventualmente a la detención de vehículos en emergencia y circulación de peatones.",
    options: [
      { code: "a", description: "Berma." },
      { code: "b", description: "Autopista." },
      { code: "c", description: "Acera." },
      { code: "d", description: "Demarcación." },
    ],
    answer: "a",
  },
  {
    n: 190,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Es una parte de la vía destinada a la circulación de vehículos y eventualmente al cruce de peatones y animales.",
    options: [
      { code: "a", description: "La calzada." },
      { code: "b", description: "La acera." },
      { code: "c", description: "La berma." },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "a",
  },
  {
    n: 191,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "Es una parte de la vía destinada al uso de peatones",
    options: [
      { code: "a", description: "La acera." },
      { code: "b", description: "La calzada." },
      { code: "c", description: "La berma." },
      { code: "d", description: "La autopista." },
    ],
    answer: "a",
  },
  {
    n: 192,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "Son señales que regulan el tránsito:",
    options: [
      {
        code: "a",
        description:
          "Las bocinas y las marcas en la calzada o señales horizontales.",
      },
      { code: "b", description: "Las bocinas y las señales verticales." },
      {
        code: "c",
        description:
          "Las señales verticales, las marcas en la calzada o señales horizontales y las bocinas.",
      },
      {
        code: "d",
        description:
          "Las señales verticales y las marcas en la calzada o señales horizontales.",
      },
    ],
    answer: "d",
  },
  {
    n: 193,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "Los vehículos deben ser conducidos con:",
    options: [
      {
        code: "a",
        description:
          "Puertas y capot cerrados, permitiéndose la maletera entreabierta para casos especiales.",
      },
      { code: "b", description: "Puertas, capot y maletera cerrados." },
      {
        code: "c",
        description:
          "Puertas, capot y maletera cerrados, salvo autorización especial.",
      },
      {
        code: "d",
        description:
          "Capot y maletera cerrados, permitiéndose dos puertas entreabiertas para casos especiales.",
      },
    ],
    answer: "b",
  },
  {
    n: 194,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "El conductor que en una vía urbana va a girar a la izquierda, a la derecha o en ¿U¿ debe hacer la señal respectiva con la luz direccional, por lo menos:",
    options: [
      { code: "a", description: "2 segundos antes de realizar la maniobra." },
      { code: "b", description: "1 metro antes de realizar la maniobra." },
      { code: "c", description: "20 metros antes de realizar la maniobra." },
      { code: "d", description: "3 metros antes de realizar la maniobra." },
    ],
    answer: "c",
  },
  {
    n: 195,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si usted está conduciendo por una carretera y va girar a la izquierda, debe realizar la señal respectiva con la luz direccional por lo menos:",
    options: [
      { code: "a", description: "2 segundos antes de realizar la maniobra." },
      { code: "b", description: "2 metros antes de realizar la maniobra." },
      { code: "c", description: "30 metros antes de realizar la maniobra." },
      { code: "d", description: "1 metro antes de realizar la maniobra." },
    ],
    answer: "c",
  },
  {
    n: 196,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "La licencia particular de la Clase y Categoría A-I, permite conducir motos?",
    options: [
      { code: "a", description: "Si." },
      { code: "b", description: "No" },
      { code: "c", description: "Únicamente en el ámbito urbano." },
      { code: "d", description: "Únicamente en carreteras." },
    ],
    answer: "b",
  },
  {
    n: 197,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "El siguiente gráfico muestra:",
    image: ImgQuestion65,
    options: [
      {
        code: "a",
        description:
          "Señalización de tránsito vertical y horizontal en una zona escolar.",
      },
      {
        code: "b",
        description:
          "Únicamente señalización de tránsito vertical en una zona escolar.",
      },
      {
        code: "c",
        description:
          "Únicamente señalización de tránsito horizontal en una zona escolar.",
      },
      { code: "d", description: "Ninguna de las alternativas es correcta." },
    ],
    answer: "a",
  },
  {
    n: 198,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Las ____ canalizadoras, tiene por función conformar las islas canalizadoras del tránsito automotor en una ____.",
    options: [
      { code: "a", description: "Islas canalizadoras - vía." },
      { code: "b", description: "Líneas - intersección." },
      { code: "c", description: "Vías - intersección." },
      { code: "d", description: "Todas las alternativas son correctas." },
    ],
    answer: "b",
  },
  {
    n: 199,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question:
      "Si al conducir en una intersección se encuentra con las siguientes marcas en el pavimento (malla ortogonal de color amarillo), significa:",
    image: ImgQuestion66,
    options: [
      {
        code: "a",
        description:
          "Que no puede detener el vehículo dentro del área de intersección.",
      },
      {
        code: "b",
        description:
          "Que se están realizando trabajos de emergencia en el área demarcada.",
      },
      {
        code: "c",
        description:
          "Que únicamente puede detener el vehículo dentro del área de intersección.",
      },
      { code: "d", description: "Que es una isla de refugio peatonal." },
    ],
    answer: "a",
  },
  {
    n: 200,
    type_materia: "Materias generales",
    category: "Al",
    issue:
      "Reglamento de Tránsito y Manual de Dispositivos de Control de Tránsito",
    question: "De acuerdo al siguiente gráfico, es correcto afirmar que:",
    image: ImgQuestion67,
    options: [
      {
        code: "a",
        description:
          "La zona que permite adelantar inicia con las líneas amarillas continuas.",
      },
      {
        code: "b",
        description:
          "Los conductores pueden estacionarse al empezar las líneas continuas.",
      },
      {
        code: "c",
        description:
          "La zona de no adelantar inicia con las líneas amarillas continuas.",
      },
      {
        code: "d",
        description:
          "El conductor del camión puede estacionarse antes de empezar las líneas continuas",
      },
    ],
    answer: "c",
  },
];
