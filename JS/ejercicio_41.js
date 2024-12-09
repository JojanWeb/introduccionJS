// 41. Ingrese una frase que lo identifique como programador de Software y luego mostrar esta
// frase invertida.

import { pedirDato, multiplicar } from "../funciones.js";

const frase = pedirDato(`Ingresa la frase: `,"string");

const invertirCadena = (cadena) => {
    let nuevaCadena = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        nuevaCadena += cadena[i];
    }
    return nuevaCadena;
}

alert(`La frase invertida es: 
    ${invertirCadena(frase)}`);