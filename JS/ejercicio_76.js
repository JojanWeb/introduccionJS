// • Crea una función que tome un número como argumento y devuelva la cadena si el
// número es par o impar.

import { pedirDato } from "../funciones.js";

const num1 = pedirDato(`Ingrese el numero `, "int");

const esPar = (a) => {
  if (a % 2 === 0) return true;
  return false;
};

if (esPar(num1)) {
  alert("El numero es PAR");
} else {
  alert("El numero es IMPAR");
}
