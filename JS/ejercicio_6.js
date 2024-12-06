// 6. los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo y el
// nombre, el grupo A está formado por las mujeres con un nombre anterior a la M y los
// hombres con un nombre posterior a la N y el grupo B por el resto, escribir un programa que
// pregunte al usuario su nombre y sexo y muestre por pantalla el grupo al que corresponde.

const grupo = (sexo, nombre) => {
    if ((nombre[0] < "M" && sexo === "F") || (nombre[0] > "N" && sexo === "M")){
        return "GRUPO A";
    }else{
        return "GRUPO B";
    }
}

let sexo = prompt("Ingrese el sexo: ");
let nombre = prompt("Ingrese el nombre: ");
let resultado = grupo(sexo, nombre);

alert(resultado);