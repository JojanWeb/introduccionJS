// 40. Una empresa que contrata personal requiere determinar la edad de las personas que
// solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que
// nacieron. Realice el código que representen el algoritmo para solucionar este problema.

import { pedirDato } from "../funciones.js";

const edad = pedirDato(`Ingresa su año de nacimiento: `,"float");
const año = pedirDato(`Ingresa el año actual: `,"float");

const edadXaño = (edad, añoActual) => añoActual - edad;

alert(`La edad de la persona es: ${edadXaño(edad, año)}`);