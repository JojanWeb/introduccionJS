// • Implemente una función que sume dos números y devuelva su suma en binario, el
// número binario devuelto debe ser una cadena

import { pedirDato } from "../funciones.js";

const numero1 = pedirDato(`Ingrese el numero 1: `, "int");
const numero2 = pedirDato(`Ingrese el numero 2: `, "int");

const binario = (numero) => {
  let resto = "";
  let binario = "";
  do {
    resto += (numero % 2).toString();
    numero = Math.floor(numero / 2);
  } while (numero != 0);
  for (let i = resto.length - 1; i >= 0; i--) {
    binario += resto[i];
  }
  return binario;
};

alert(`La suma de los numeros "${numero1} + ${numero2}" convertido a binario:

  ${binario(numero1 + numero2)}`);
