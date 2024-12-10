// 72. Escribir un programa que pida al usuario una palabra y luego muestre por pantalla una a
// una las letras de la palabra introducida empezando por la última.

import { pedirDato } from "../funciones.js";

const palabra = pedirDato(`Ingrese la palabra: `, "string");

for (let i = palabra.length - 1; i >= 0; i--) {
  alert(palabra[i]);
}
