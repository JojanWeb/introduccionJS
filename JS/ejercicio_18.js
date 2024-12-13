// 18. Escribir un programa que evalúe la siguiente expresión (a+7*c) / (b+2-a) + 2*b

import { pedirDato } from "../funciones.js";

const a = pedirDato(`Ingrese el valor de (a): `, "int");
const b = pedirDato(`Ingrese el valor de (b): `, "int");
const c = pedirDato(`Ingrese el valor de (c): `, "int");

const evaluarExpresion = (a, b, c) => (a + 7 * c) / (b + 2 - a) + 2 * b;

alert(
  `El resultado de la evaluacion "(a+7*c) / (b+2-a) + 2*b" es: ${evaluarExpresion(
    a,
    b,
    c
  )}`
);
