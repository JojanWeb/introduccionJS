// 15. Escribir un programa que calcule la longitud y el área de una circunferencia.

import { pedirDato } from "../funciones.js";

const longitudCircunferencia = (radio) => 2 * Math.PI * radio;
const areaCircunferencia = (radio) => Math.PI * radio ** 2;

const radio = pedirDato("Ingrese el radio de la circunferencia: ", "float");

alert(`El area de la circunferencia es de: ${areaCircunferencia(radio)}
y la logitud de la circunferencia es de: ${longitudCircunferencia(radio)}`);
