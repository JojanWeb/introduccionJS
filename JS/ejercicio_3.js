// 3. Escribir un programa que pida al usuario dos números y muestre por pantalla su división, si
// el divisor es cero el programa debe mostrar un error, se debe manejar mediante
// excepciones y el mensaje debe ser personalizado.

const division = (dividendo, divisor) => {
    try {
        if (divisor === 0) {
            throw new Error("DIVISOR NO PUEDE SER 0");
        }else{
            let resultado = dividendo / divisor;
            console.log(resultado);
            
            return dividendo / divisor;
        }
    } catch (error) {
        return error;
    }
}

let dividendo = parseInt(prompt("Ingrese el dividendo: "));
let divisor = parseInt(prompt("Ingrese el divisor: "));
let resultado = division(dividendo, divisor);

alert(resultado);
