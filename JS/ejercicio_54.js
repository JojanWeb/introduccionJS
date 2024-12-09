// 54. Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él
//     segundo, en caso contrario indicar con un mensaje que la operación no es posible
//     realizarla.

import { pedirDato } from "../funciones.js";
    
const num1 = pedirDato(`Ingrese el numero 1: `,"float");
const num2 = pedirDato(`Ingrese el numero 2: `,"float");

if (num1 < num2) {
    alert(`Numero2: ${num2} 
        Numero1: ${num1} 
        ${num2} - ${num1} = ${num2 - num1}`);
} else {
    alert("La operacion no es posible realizarla");
}