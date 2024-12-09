// 52. En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es
// de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora
// trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de
// horas trabajadas.

import { pedirDato, multiplicar } from "../funciones.js";

const tipo = pedirDato(`Que tipo de empleado 
    1. Planta
    2. Administrativo`,"int");
const horas = pedirDato(`Ingrese las horas trabajadas `,"int");
    
    switch (tipo) {
        case 1:
        alert(`Su pago con el rol de Planta por trababajar ${horas} horas es de: ${multiplicar(horas, 20000)}`);
        break;
    case 2:
        alert(`Su pago con el rol de Administrativo por trababajar ${horas} horas es de: ${multiplicar(horas, 10000)}`);
        break;
    default:
        alert(`Tipo invalido`);
        break;
}
