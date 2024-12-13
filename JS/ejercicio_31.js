// 31. Se requiere calcular la distancia entre dos puntos, realizar el código que permita hallar la
// solución, por favor utilizar funciones matemáticas para ello.:
// a. rc((x2-x1)^2 + (y2-y1)^2).

import { pedirDato } from "../funciones.js";

const calcularDistancia = (x1, y1, x2, y2) =>
  Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

const x1 = pedirDato(`Ingrese el valor de x1: `, "int");
const y1 = pedirDato(`Ingrese el valor de y1: `, "int");
const x2 = pedirDato(`Ingrese el valor de x2: `, "int");
const y2 = pedirDato(`Ingrese el valor de y2: `, "int");

let distancia = calcularDistancia(x1, y1, x2, y2);

alert("La distancia entre los puntos es: " + distancia);
