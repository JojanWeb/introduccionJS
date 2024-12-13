// 20. Escriba un algoritmo que permita obtener las raíces reales de la ecuación de segundo
// grado: a * x2 + b + x + c, siendo X un valor constante.

import { pedirDato } from "../funciones.js";

const a = pedirDato(`Ingrese el valor de a: `, "string");
const b = pedirDato(`Ingrese el valor de b: `, "string");
const c = pedirDato(`Ingrese el valor de c: `, "string");

const calcularDiscriminante = (a, b, c) => b ** 2 - 4 * a * c;

const raicesReales = (a, b, discriminante) => {
  const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
  const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
  return [x1, x2];
};

const resolverEcuacion = (a, b, c) => {
  const discrimiante = calcularDiscriminante(a, b, c);

  if (discrimiante > 0) {
    const [x1, x2] = raicesReales(a, b, discrimiante);
    return `La ecuacion de segundo grado tiene 2 soluciones reales y distintas:
    x1 = ${x1}
    x2 = ${x2}`;
  } else if (discrimiante === 0) {
    const [x] = raicesReales(a, b, discrimiante);
    return `La ecuacion de segundo grado tiene una raiz real doble:
    x = ${x} `;
  } else {
    return `La ecuacion de segundo grado no tiene raices reales`;
  }
};

alert(resolverEcuacion(a, b, c));
