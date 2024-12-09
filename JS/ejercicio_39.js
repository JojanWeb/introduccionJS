// 39. Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura
// Considere que se cobra por m2 y realice el código que representen el algoritmo que le
// permita ir generando presupuestos para cada cliente.

import { pedirDato, multiplicar } from "../funciones.js";

const valorM2 = pedirDato(`Ingresa el valor del metro cuadrado: `,"float");
const cantidad = pedirDato(`Ingresa la cantidad de metros cuadrados a pintar: `,"float");

alert(`El trabajo de pintura tiene un valor de: ${multiplicar(valorM2, cantidad)} pesos`);