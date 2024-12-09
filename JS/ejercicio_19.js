// 19. Escribir un programa que calcule el área y el volumen de un cilindro

import { pedirDato } from "../funciones.js";

const volumenCilindro = (radio, altura) => Math.PI * radio ** 2 * altura;
const areaCilindro = (radio, altura) => 2 * Math.PI * radio * (radio + altura);

const radio = pedirDato("Ingrese el radio del cilindro: ", "float");
const altura = pedirDato("Ingrese el altura del cilindro: ", "float");

alert(`El volumen del cilindro es de: ${volumenCilindro(radio, altura)}
El area del cilindro es de ${areaCilindro(radio, altura)}`);
