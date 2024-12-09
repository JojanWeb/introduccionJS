// 60. Hacer un programa que permita ingresar n cantidad de cursos, si la cantidad de cursos que
// lleva el alumno es menor que 6 el pago será $2.000.000 por cada curso, pero si la cantidad
// de cursos es mayor que 6 el pago será únicamente de $1.200.000.

import { pedirDato } from "../funciones.js";

const cantidad = pedirDato(`Ingrese la cantidad de cursos: `,"string");

if (cantidad < 6) {
    alert(`El pago por cada curso es de "2.000.000", lo que equivale a un total de: ${cantidad * 2000000}`);
} else if (cantidad > 6) {
    alert(`El pago por cada curso es de "1.200.000", lo que equivale a un total de: ${cantidad * 1200000}`);
}else{
    alert("Cantidad invalida");
}