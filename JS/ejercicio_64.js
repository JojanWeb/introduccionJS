// 64. Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// todos los números impares desde 1 hasta ese número separados por coma.

import { pedirDato } from "../funciones.js";

const esImpar = (numero) => numero % 2 != 0;

const numero = pedirDato(`Ingrese el numero: `,"int");
let numerosArray = [];
for (let i = 1; i <= numero ; i++) {
    if (esImpar(i)) {
        numerosArray.push(i);
    }
}

alert(`NUMEROS IMPARES HASTA EL NUMERO (${numero}) son:
    ${numerosArray.join(" ,")}`);
