// 68. Escribir un programa que muestre por consola la tabla de multiplicar del 1 al 10.

import { pedirDato } from "../funciones.js";

const numero = pedirDato(`Ingrese el numero: `, "int");

const tabla = (numero) => {
  console.log(`TABLA DEL ${numero}`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
};

tabla(numero);
