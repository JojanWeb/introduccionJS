// 71. Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un
// número primo o no.

import { pedirDato } from "../funciones.js";

const esPrimo = (numero) => {
  for (let i = 2; i <= numero / 2; i++) {
    if (numero % i === 0) false;
  }
  return true;
};

const numero = pedirDato(`Ingrese el numero: `, "int");

if (esPrimo(numero)) {
  alert(`El numero "${numero}" es PRIMO`);
} else {
  alert(`El numero "${numero}" NO ES PRIMO`);
}
