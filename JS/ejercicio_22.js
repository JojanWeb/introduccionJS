// 22. Escribir un programa que muestre el pago de una llamada telefónica sabiendo que cada
// minuto cuesta $355 pesos y un IVA 20%.

import { pedirDato } from "../funciones.js";

const valorLlamada = (tiempo) => tiempo * 355 + tiempo * 355 * 0.2;

const tiempo = pedirDato("Ingrese el tiempo de la llamada: ", "float");

alert(`El costo de la llamada telefonica es de: ${valorLlamada(tiempo)}`);
