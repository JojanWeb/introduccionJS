// 1. Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor o
// menor de edad, el programa debe validar que solo se puedan ingresar números positivos.

const esMayor = (edad) => {
    if (edad > 0) {
        if (edad >= 18) {
            return true;
        } else {
            return false;
        }
    }else{
        let mensaje = "Edad invalida";
        return mensaje;
    }
}

let edad = parseInt(prompt("Ingrese su edad: "));
let resultado = esMayor(edad);
// console.log(typeof resultado);

if (typeof resultado === 'string') {
    alert(resultado);
} else if (resultado){
    alert("Mayor de Edad");
}else{
    alert("Menor de Edad");
}