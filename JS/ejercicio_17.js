// 17. Escribir un programa que calcule el volumen de una esfera

import { pedirDato } from "../funciones.js";

const volumenEsfera = (radio) => (4 / 3) * Math.PI * radio ** 2;

const radio = pedirDato("Ingrese el radio de la esfera: ", "float");

alert(
  `El volumen de la esfera con radio ${radio} es de ${volumenEsfera(radio)}`
);
