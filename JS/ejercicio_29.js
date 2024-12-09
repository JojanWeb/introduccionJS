// 29. Un estudiante realiza cuatro exámenes. Realizar un algoritmo correspondiente para
// obtener el promedio de las calificaciones obtenidas. Las calificaciones van 1 a 5 puntos.

import { pedirDato, calcularPromedio } from "../funciones.js";

let totalNotas = 0,
  sumaNotas = 0;

while (totalNotas < 4) {
  let nota = pedirDato(
    "Ingrese el valor de la calificacion N°" + (totalNotas + 1),
    "int"
  );
  sumaNotas += nota;
  if (nota <= 5) {
    totalNotas += 1;
  } else {
    alert("Ingrese un valor de nota valido");
  }
}

alert(
  `El promedio de las calificaciones es de: ${calcularPromedio(
    sumaNotas,
    totalNotas
  )}`
);
