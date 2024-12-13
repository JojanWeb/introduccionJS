// 34. Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
// depósito.
// a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
// b. Volumen = PI *(radio^2)* H (altura del depósito).
// El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el tiempo
// en segundos

import { pedirDato } from "../funciones.js";

const calcularCaudal = (volumen, tiempo) => volumen / tiempo;

const hallarVolumen = (altura, radio) => Math.PI * radio ** 2 * altura;

const altura = pedirDato(`Ingrese la altura del deposito: `, "int");

const radio = pedirDato(`Ingrese el radio del deposito: `, "int");

const tiempo = pedirDato(
  `Ingrese el período en el que ocurre el flujo: `,
  "int"
);

const caudal = calcularCaudal(hallarVolumen(altura, radio), tiempo);
const tiempoLlenado = hallarVolumen(altura, radio) / caudal;

alert(
  `Tiempo estimado para el llenado de el desposito es: ${(
    tiempoLlenado / 60
  ).toFixed(2)} minutos`
);
