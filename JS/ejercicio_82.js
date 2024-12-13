// • Crea una función que tome una cadena como parámetro y devuelva la cadena en orden
// inverso, por ejemplo, si la cadena de entrada es ‘Hola’, la función debería retornar ‘aloH’.

import { pedirDato } from "../funciones.js";

const palabra = pedirDato(`Ingrese la palabra: `, "string");

const invertirCadena = (cadena) => {
  let cadenaInvertida = "";
  for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena[i];
  }
  return cadenaInvertida;
};

alert(`Cadena invertida:
  ${invertirCadena(palabra)}`);
