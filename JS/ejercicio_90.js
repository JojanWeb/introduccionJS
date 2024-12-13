// • Crea una función que convierta números del 0 al 5 en su representación textual, por
// ejemplo: “cero”, “uno”, “dos”, “tres” etc.

import { pedirDato } from "../funciones.js";

const numero = pedirDato(`Ingrese el numero: `, "int");

const numerosTexto = (numero) => {
  const numerosTexto = ["cero", "uno", "dos", "tres", "cuatro", "cinco"];

  if (numero >= 0 && numero <= 5) {
    return numerosTexto[numero];
  } else {
    return false;
  }
};

if (numerosTexto(numero))
  alert(
    `Numero "${numero}" en su representacion textual: ${numerosTexto(numero)}`
  );
else alert(`Numero invalido`);
