// 11. Escribir un programa que sume, resta, multiplique y divida dos números.

import { pedirDato } from "../funciones.js";

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const dividir = (a, b) => a / b;
const multiplicar = (a, b) => a * b;

let num1, num2, operacion;
do {
  num1 = pedirDato("Ingrese el primer numero: ", "int");
  num2 = pedirDato("Ingrese el segundo numero: ", "int");
  operacion = pedirDato(`Que operacion desea ejecutar?
  suma
  resta
  division
  multiplicacion`);
} while (typeof (num1 && num2) != "number");

if (operacion === "suma") alert(sumar(num1, num2));
else if (operacion === "resta") alert(restar(num1, num2));
else if (operacion === "division") alert(dividir(num1, num2));
else if (operacion === "multiplicacion") multiplicar(sumar(num1, num2));
else alert("Operacion no valida");
