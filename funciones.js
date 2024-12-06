export const esMayor = (edad) => {
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

// 2. escribir un programa que almacene la cadena de caracteres contraseña de una variable,
// pregunte al usuario por la contraseña e imprima por pantalla si la contraseña introducida
// por el usuario coincide con la guardada en la variable sin tener en cuenta mayúsculas y
// minúsculas, se debe validar que solo se pueda ingresar valores alfanuméricos.

// 3. Escribir un programa que pida al usuario dos números y muestre por pantalla su división, si
// el divisor es cero el programa debe mostrar un error, se debe manejar mediante
// excepciones y el mensaje debe ser personalizado.

// 4. Escribir un programa que pida al usuario un número entero y muestre por pantalla si es par
// o impar.

// 5. Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
// ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte al
// usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe tributar o
// no.

// 6. los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo y el
// nombre, el grupo A está formado por las mujeres con un nombre anterior a la M y los
// hombres con un nombre posterior a la N y el grupo B por el resto, escribir un programa que
// pregunte al usuario su nombre y sexo y muestre por pantalla el grupo al que corresponde.