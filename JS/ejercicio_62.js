// 62. Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces

import { pedirDato } from "../funciones.js";

const palabra = pedirDato(`Ingrese la palabra: `,"string");

for (let i = 0; i < 9; i++) {
    alert(palabra);
}