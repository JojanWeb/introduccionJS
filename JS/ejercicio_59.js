// 59. En un colegio, se necesita hacer una selección de basquetbol que represente al colegio,
// para lo cual es requisito indispensable que los postulantes sean menores o iguales a 19
// años, con una estatura de más de 175 cm y el peso tiene que estar entre los 80 kg y 75.

import { pedirDato } from "../funciones.js";

const edad = pedirDato(`Ingrese su edad: `,"string");
const peso = pedirDato(`Ingrese su peso: `,"string");
const estatura = pedirDato(`Ingrese su estatura: `,"string");

const validarPostulante = (edad, peso, estatura) => {
    if (edad <= 19 && estatura > 1.75 && (peso <= 80 || peso >=75)) {
        return true;
    }
    return false;
}

if (validarPostulante(edad, peso, estatura)){
    alert("POSTULANTE VALIDO");
}else{
    alert("POSTULANTE NO CUMPLE CON LOS REQUISITOS");
}