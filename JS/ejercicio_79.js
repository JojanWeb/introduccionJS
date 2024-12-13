// • Crea una función para calcular cuantas silabas tiene cada palabra, imprime el resultado
// en la consola.
import { pedirDato } from "../funciones.js";

const buscarSilabas = (palabra) => {
  const silabas = palabra.split(/[^aeiouáéíóú]+/).filter(Boolean);
  return silabas.length;
};

const palabra = pedirDato(`Ingrese la palabra: `, "string");

console.log(
  `La palabra "${palabra}" tiene: ${buscarSilabas(palabra)} silabas.`
);
