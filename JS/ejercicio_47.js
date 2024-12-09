// 47. Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el
// menor o si son iguales.

import { pedirDato, mayorDeTres } from "../funciones.js";

const a = pedirDato(`Ingresa el numero A: `,"int");
const b = pedirDato(`Ingresa el numero B: `,"int");
const c = pedirDato(`Ingresa el numero C: `,"int");

const mayor = mayorDeTres(a,b,c);

if (mayor === false) {
    alert(`2 o mas numeros son iguales`);
}else{
    alert(`El mayor numero es el ${mayor}`);
}