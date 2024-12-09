// 63. Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los
// años que ha cumplido (desde 1 hasta su edad).

import { pedirDato } from "../funciones.js";

const edad = pedirDato(`Ingrese la edad: `,"string");

for (let i = 1; i <= edad; i++) {
    alert("CUMPLIO: " + i + " AÑOS");
}