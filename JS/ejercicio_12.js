// 12. Escribir un programa que calcule el área de un rectángulo:

import { pedirDato } from "../funciones.js";

const hallarArea = (base, altura) => base * altura;

const base = pedirDato("Ingrese la base del rectangulo: ", "float");
const altura = pedirDato("Ingrese la altura del rectangulo: ", "float");

alert("El area del rectangulo es de: " + hallarArea(base, altura));
