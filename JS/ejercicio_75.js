// • Crea una función que reciba dos números como parámetros y devuelva el mayor de
// ellos.

import { pedirDato } from "../funciones.js";

const num1 = pedirDato(`Ingrese el numero 1: `, "int");
const num2 = pedirDato(`Ingrese el numero 2: `, "int");

const esMayor = (a, b) => {
  if (a > b) return a;
  return b;
};

alert(`El numero mayor entre 
  ${num1} y ${num2} es ${esMayor(num1, num2)}`);
