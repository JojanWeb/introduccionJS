// 28. Calcular el sueldo de un empleado dados como datos de entrada:
// a. Nombre.
// b. horas de trabajo.
// c. pago en hora.

import { pedirDato } from "../funciones.js";

const nombre = pedirDato("Ingrese su nombre: ", "string");
const horas = pedirDato("Ingrese las horas trabajadas ", "float");
const valorHora = pedirDato("Ingrese el valor de la hora de trabajo", "float");

const multiplicar = (a, b) => a * b;

alert(`Empleado: ${nombre}
  Horas Trabajadas: ${horas}
  Sueldo total: ${multiplicar(horas, valorHora)}`);
