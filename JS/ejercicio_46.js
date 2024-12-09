// 46. Calcule el mayor de tres números, permitiendo leer 3 valores diferentes.

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