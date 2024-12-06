// 2. escribir un programa que almacene la cadena de caracteres contraseña de una variable,
// pregunte al usuario por la contraseña e imprima por pantalla si la contraseña introducida
// por el usuario coincide con la guardada en la variable sin tener en cuenta mayúsculas y
// minúsculas, se debe validar que solo se pueda ingresar valores alfanuméricos. 

const esIgual = (cadena, cadenaEvaluar) => {
    let regex = /\W/;
    
    if (regex.test(cadena) === true) {
        let mensaje = "Solo puede ingresar valores alfanumericos en la cadena base";
        return mensaje;
    }else if (regex.test(cadenaEvaluar) === true){
        let mensaje = "Solo puede ingresar valores alfanumericos en la cadena a validar";
        return mensaje;
    }else if (cadena.toLowerCase() === cadenaEvaluar.toLowerCase()) {
        let mensaje = "CONTRASEÑA CORRECTA";
        return  mensaje;
    }
    else{
        let mensaje = "CONTRASEÑA INCORRECTA";
        return  mensaje;
    }
}

let palabra = prompt("Ingrese la contraseña: ");
let resultado = esIgual("hola",palabra);

alert(resultado);