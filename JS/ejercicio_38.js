// 38. Tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año.
// Martín toma 2/3 del total, Jairo un cuarto del total, y Lorena se queda con el resto. ¿Qué
// parte le corresponde a Lorena?

import { pedirDato, multiplicar } from "../funciones.js";

const cantidad = pedirDato(`Ingresa la cantidad de tapas de gaseosa: `,"float");

const martin = multiplicar(cantidad, 2/3);
const jairo = multiplicar(cantidad, 1/4);
const lorena = cantidad - (martin + jairo);
alert(`La cantidad que le corresponde a Martin es: ${martin} tapas
La cantidad que le corresponde a Jairo es: ${jairo} tapas
La cantidad que le corresponde a Lorena es: ${lorena} tapas`);