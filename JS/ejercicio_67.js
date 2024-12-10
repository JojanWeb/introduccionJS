// 67. Escribir un programa que pida al usuario un número entero y muestre por pantalla un
// triángulo rectángulo como el de más abajo, de altura el número introducido.

import { pedirDato } from "../funciones.js";

const numero = pedirDato(`Ingrese el numero: `, "int");

for (let i = 0; i < numero; i++) {
  console.log("*".repeat(i));
}
