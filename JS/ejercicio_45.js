// 45. Determinar si un número es positivo y menor que 100.

import { pedirDato, dividir } from "../funciones.js";

const numero = pedirDato(`Ingresa el numero: `,"int");

const esPositivo = (numero) => {
    if (numero > 0) {
        return true;
    }
    return false;
}

const menorQue = (numero, limite) => {
    if (numero < limite) {
        return true;
    }
    return false;
}

if (esPositivo(numero) && menorQue(numero, 100)) {
    alert(`El numero ${numero} SI es positivo y menor que 100`);
} else {
    alert(`El numero ${numero} NO es positivo y NO es menor que 100`);
}