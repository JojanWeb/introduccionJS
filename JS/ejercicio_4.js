// 4. Escribir un programa que pida al usuario un número entero y muestre por pantalla si es par
// o impar.

const esParImpar = (numero) => {
    if (Number.isInteger(numero)) {
        if (numero % 2 === 0) {
            return "PAR";
        }else{
            return "IMPAR";
        }
    }else{
        return "ERROR: INGRESE UN NUMERO ENTERO";
    }
}

let numero = parseInt(prompt("Ingrese el numero: "));
let resultado = esParImpar(numero);

alert(resultado);