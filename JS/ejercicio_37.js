// 37. Un camión transporta 25 cajas de repuestos de carros. Si cada caja pesa 748 Kg ¿cuántos
// Kg transporta?


import { pedirDato, multiplicar } from "../funciones.js";

const cantidad = pedirDato(`Ingresa la cantidad de cajas de respuestos de carros: `,"float");

alert("Los kg que transporta el camion es de: " + multiplicar(cantidad, 748));
