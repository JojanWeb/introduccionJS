// 49. Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean
// positivos: área triangulo= lado * lado


import { pedirDato, multiplicar } from "../funciones.js";
        
const largo = pedirDato(`Ingresa la medida del largo del rectangulo: `,"float");
const ancho = pedirDato(`Ingresa la medida del ancho del rectangulo: `,"float");

if (largo > 0 && ancho > 0) {
    alert(`El area del triangulo es igual a: ${multiplicar(largo, ancho)}`);
}else{
    alert(`Las medidas del rectangulo deben ser positivas`);
}