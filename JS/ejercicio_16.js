// 16. Escribir un programa que calcule la velocidad de un proyectil que recorre 2km en 5
// minutos, exprese el resultado en metros/segundo.
import { pedirDato } from "../funciones.js";

const conversionDistancia = (kilometros, minutos) => {
  let metros = kilometros * 1000;
  let segundos = minutos * 60;
  return [metros, segundos];
};

const calcularVelocidad = (metros, segundos) => metros / segundos;

const distancia = pedirDato("Ingrese la distancia que recorrio: ", "float");
const tiempo = pedirDato("Ingrese el tiempo: ", "float");

let [metros, segundos] = conversionDistancia(distancia, tiempo);

alert("Velocidad = " + calcularVelocidad(metros, segundos));
