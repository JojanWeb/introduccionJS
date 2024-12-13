// • Crea una función que tome un conjunto de números y devuelva el inverso aditivo de cada
// uno. Todo los positivos se devuelve negativo y todos los negativos se devuelve positivo.

import { pedirDato } from "../funciones.js";

const numero = pedirDato(`Ingrese el numero: `, "int");

const inversoAditivo = (numero) => numero - numero * 2;

alert(`El inverso aditivo del ${numero} es:
  ${inversoAditivo(numero)}`);
