// • Genera un patrón de asteriscos en forma de pirámide.

import { pedirDato } from "../funciones.js";

const filas = pedirDato(`Ingrese el numero de filas: `, "int");

const generarPiramide = (filas) => {
  let piramide = "";
  for (let i = 1; i <= filas; i++) {
    piramide += " ".repeat(filas - i) + "*".repeat(2 * i - 1) + "\n";
  }
  return piramide;
};

alert(generarPiramide(filas));
