// 23. Realice un algoritmo que, a partir de proporcionarle la velocidad de un automóvil
// expresada en kilómetros por hora, proporcione la velocidad en metros por segundo.

import { pedirDato } from "../funciones.js";

const convertirVelocidad = (velocidad) => velocidad / 3.6;

const velocidad = pedirDato("Ingrese velocidad en km/h: ", "float");

alert(
  `La conversion de ${velocidad} km/h, convertida a m/s es: ${convertirVelocidad(
    velocidad
  )} m/s`
);
