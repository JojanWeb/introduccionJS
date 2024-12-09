// 27. Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. dicha
// calificación se compone de los siguientes porcentajes:
// a. 55% del promedio final de sus calificaciones de los tres (3) parciales.
// b. 30% de la calificación examen final.
// c. 15% de la calificación trabajo final.

import { pedirDato, calcularPromedio } from "../funciones.js";

let totalNota = 0,
  sumaNotas = 0;
for (let i = 1; i < 4; i++) {
  let nota = pedirDato("Ingrese la nota N° " + i + ": ", "float");
  sumaNotas += nota;
  totalNota += 1;
}

const examen = pedirDato("Ingrese la calificacion del examen final: ", "float");
const trabajo = pedirDato("Ingrese la calificación trabajo final: ", "float");

const parciales = calcularPromedio(sumaNotas, totalNota);
const promedioFinal = parciales * 0.55 + examen * 0.3 + trabajo * 0.15;

alert(`El promedio final de la materia de algoritmos es: ${promedioFinal}`);
