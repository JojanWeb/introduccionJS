// 42. Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550. Calcular el
// monto total de la venta, según la cantidad de artículos solicitados durante el día.

import { pedirDato, multiplicar } from "../funciones.js";

const libros = pedirDato(`Ingresa la cantidad de libros solicitados: `,"float");
const cuadernos = pedirDato(`Ingresa la cantidad de cuadernos solicitados: `,"float");
const lapiceros = pedirDato(`Ingresa la cantidad de lapiceros solicitados: `,"float");

let total = multiplicar(libros, 10000) + multiplicar(cuadernos, 7550) + multiplicar(lapiceros, 5550);

alert(`El monto total es de: ${total}`);