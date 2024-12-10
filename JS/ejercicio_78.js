// • Crea una función que calcule la longitud de una palabra si es corta o si es larga. (palabras
// cortas menores de 5 caracteres).

import { pedirDato } from "../funciones.js";

const palabra = pedirDato(`Ingrese la palabra `, "string");

const logitud = (palabra) => {
  let longitudPalabra;
  if (palabra.legth >= 5) {
    longitudPalabra = "LARGA";
  } else {
    longitudPalabra = "CORTA";
  }
  return longitudPalabra;
};

alert(`La logitud de la palabra es: ${logitud(palabra)}`);
