// 21. Escribir un programa que calcule el volumen de un elipsoide.

import { pedirDato } from "../funciones.js";

const volumenElipsoide = (a, b, c) => (4 / 3) * Math.PI * a * b * c;

const a = pedirDato("Ingrese el semieje mayor en la dirección x: ", "float");
const b = pedirDato("Ingrese el semieje mayor en la dirección y: ", "float");
const c = pedirDato("Ingrese el semieje mayor en la dirección z: ", "float");

alert(`El volumen del elipsoide es de: ${volumenElipsoide(a, b, c)}`);
