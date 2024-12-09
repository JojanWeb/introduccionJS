// 13. Escribir un programa que lea 4 números y calcule la media

import { pedirDato } from "../funciones.js";

let numero,
  sumaNum = 0,
  total;
for (total = 0; total < 4; total++) {
  numero = pedirDato("Ingrese el numero" + (total + 1) + " :", "int");
  sumaNum += numero;
}

const media = (sumaNum, total) => {
  return sumaNum / total;
};

alert(media(sumaNum, total));
