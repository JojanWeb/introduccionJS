// 57. Consideramos la asignación de una calificación literal a un rango dado de calificaciones
// numéricas de la siguiente manera: Rango de calificaciones: 9.1 a 10 Asignar la calificación
// de A equivale a Excelente 8.1 a 9 Asignar la calificación de A equivale a Muy bien 7.5 a 8
// Asignar la calificación de A equivale a Bien Menor a 7.5 asignar la calificación de NA No
// Aprobado.

import { pedirDato } from "../funciones.js";

const calificacion = pedirDato(`Ingrese la calificacion: `,"float");

if (calificacion >= 9.1 && calificacion <= 10) {
    alert("CALIFICACION EXCELENTE");
}else if (calificacion >= 8.1 && calificacion <= 9) {
    alert("CALIFICACION MUY BIEN");
}else if (calificacion >= 7.5 && calificacion <= 8) {
    alert("CALIFICACION BIEN");
}else if (calificacion < 7.5) {
    alert("CALIFICACION NO APROBADO");
}else{
    alert("Numero Invalido");
}