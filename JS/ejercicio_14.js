// 14. Escribir un programa que calcule el área de un triángulo.

import { pedirDato } from "../funciones.js";

const areaTriangulo = (base, altura) => (base * altura) / 2;

const base = pedirDato("Ingrese la base del triangulo: ", "float");
const altura = pedirDato("Ingrese la altura del triangulo: ", "float");

alert("El area del triangulo es de: " + areaTriangulo(base, altura));
