// 66. Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el
// número de años, y muestre por pantalla el capital obtenido en la inversión cada año que
// dura la inversión.

import { pedirDato } from "../funciones.js";

const cantidad = pedirDato(`Ingrese la cantidad a invertir: `, "int");
const interes = pedirDato(`Ingrese el interes anual: `, "int");
const años = pedirDato(`Ingrese el numero de años: `, "int");

for (let i = 1; i <= años; i++) {
  let capital = cantidad * (1 + interes / 100) ** i;
  alert(
    `Capital obtenido en la invesion en el Año #${i} = ${capital.toFixed(2)}`
  );
}
