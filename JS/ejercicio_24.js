// 24. Escriba una expresión regular que reconozca los números en punto flotante (por ejemplo -
// 2.3e-1, -3e2, 23, 3.2).

import { pedirDato } from "../funciones.js";

// Definición de la expresión regular
let regex = /^[0-9-e]+(\.?[0-9-e]+)$/;
// [0-9-e] -> permite números, el signo negativo y la letra 'e'.
// [0-9-e]+ -> indica que debe haber al menos uno de los caracteres anteriores.
// \.? -> permite que haya un punto decimal, pero es opcional.
// (\.?[0-9-e]+) -> Si el número contiene un punto, debe ir seguido de números, signos negativos o la letra 'e'.
// ^...$ -> asegura que la cadena coincida completamente con la expresión regular, desde el principio hasta el final.

const numero = pedirDato(`Ingrese el numero: `, "string");

if (regex.test(numero)) {
  alert("Numero en punto flotante.");
} else {
  alert("Numero invalido");
}
