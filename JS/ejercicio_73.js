// 73. Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre
// por pantalla el número de veces que aparece la letra en la frase.

import { pedirDato } from "../funciones.js";

const palabra = pedirDato(`Ingrese la frase: `, "string");
const letra = pedirDato(`Ingrese la letra a buscar: `, "string");

const buscar = (palabra, letra) => palabra.split(letra).length - 1;

alert(
  `EN LA FRASE "${palabra}", ESTA LA LETRA "${letra}" UN TOTAL DE ${buscar(
    palabra,
    letra
  )}`
);
