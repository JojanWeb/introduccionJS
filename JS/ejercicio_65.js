// 65. Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// la cuenta atrás desde ese número hasta cero separados por comas.

import { pedirDato } from "../funciones.js";

const cuentaRegresiva = (numero) => {
  let cuentaAtras = [];
  while (true) {
    if (numero > 0) {
      for (let i = numero; i >= 0; i--) {
        cuentaAtras.push(i);
      }
      return cuentaAtras;
    } else {
      alert("INGRESE UN NUMERO ENTERO POSITIVO;");
    }
  }
};

const numero = pedirDato(`Ingrese el numero: `, "int");
const array = cuentaRegresiva(numero);
alert(`CUENTA REGRESIVA: 
  ${array.join(" ,")}`);
