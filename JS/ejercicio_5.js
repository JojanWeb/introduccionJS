// 5. Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
// ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte al
// usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe tributar o
// no.

const tributar = (edad, ingresos) => {
    if (edad > 16 && ingresos >= 1000) {
        return true;
    }else{
        return false;
    }
}

let edad = parseInt(prompt("Ingrese su edad: "));
let ingresos = parseInt(prompt("Ingrese sus ingresos: "));

let resultado = tributar(edad, ingresos);

if (resultado) {
    alert("Debe tributar");
}else{
    alert("No debe tributar");
}