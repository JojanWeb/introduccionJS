// 48. Escriba un algoritmo que permita calcular el área, debe preguntar que figura geométrica
// desea calcular "Triángulo y Círculo: (Escriba T o C):
// a. Triangulo = base * altura / 2
// b. Circulo = PI * radio* radio

import { pedirDato, areaTriangulo, areaCirculo } from "../funciones.js";

const figura = pedirDato(`Que figura desea calcularle el area: 
    Triangulo (T)
    Circulo (C)`,"string");

    switch (figura) {
        case "T":
        const base = pedirDato(`Ingresa la base del triangulo: `,"float");
        const altura = pedirDato(`Ingresa la altura del triangulo: `,"float");
        alert(`El area del triangulo es igual a: ${areaTriangulo(base, altura)}`);
        break;
    case "C": 
        const radio = pedirDato(`Ingresa el radio del circulo: `,"float");
        alert(`El area del circulo es igual a: ${areaCirculo(radio)}`);
        break;
    default:
        break;
}