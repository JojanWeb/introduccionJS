// 43. Escriba una expresión regular que reconozca las cadenas de doble comillas. Debe permitir
// la presencia de comillas y caracteres escapados.

import { pedirDato } from "../funciones.js";

const regex = /"(?:\\.|[^"\\])*"/;

const cadena = pedirDato(`Ingrese la cadena: `, "string");

if (regex.test(cadena)) {
  alert(`La cadena es valida`);
} else {
  alert(`La cadena no es valida`);
}
