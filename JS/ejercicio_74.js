// 74. Escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta que el
// usuario escriba “salir” que terminará.

import { pedirDato } from "../funciones.js";

while (true) {
  const palabra = pedirDato(
    `Escribe algo (Ingresa "salir" para salir): `,
    "string"
  );
  if (palabra === "salir") {
    break;
  } else {
    alert(`Eco: ${palabra}`);
  }
}
