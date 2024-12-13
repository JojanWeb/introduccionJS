// • Escribe una función que tome una cadena y devuelva una nueva cadena sin las vocales.

import { pedirDato } from "../funciones.js";

const cadena = pedirDato(`Ingrese la cadena: `, "string");

const sinVocales = (cadena) => cadena.split(/[aeiou]/i).join("");

alert(`La cadena ${cadena} sin vocales es:
  ${sinVocales(cadena)}`);
