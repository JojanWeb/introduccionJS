// 36. En el programa de cocina de “Doña Anita” han dado la receta para la preparación de
// bizcocho especial de chocolate. Por cada 100 gramos de harina hay que añadir 10 gramos
// de cacao y un puñado de nueces. Si quiero prepararlos con 20 gramos de chocolate. ¿La
// cantidad de gramos de harina para hacer el bizcocho es?

import { pedirDato } from "../funciones.js";


const tipo = pedirDato(`Elija la cantidad de que tipo de ingrediente va a ingresar
    1. Harina
    2. Chocolate`,"float");

const gramosChocolate = (harina) => harina / 10;
const gramosHarina = (chocolate) => chocolate * 10;

let mensaje;
switch (tipo) {
    case 1:
        const gramos = pedirDato(`Ingresa la cantidad de gramos de harina: `,"float");
        alert(`La cantidad de gramos de chocolate que tiene que utilizar es ${gramosChocolate(gramos)}`);
        break;
    case 2:
        gramos = pedirDato(`Ingresa la cantidad de gramos de chocolate: `,"float");
        alert(`La cantidad de gramos de chocolate que tiene que utilizar es ${gramosHarina(gramos)}`);
        break;
    default:
        alert("Ingrese un numero de ingrediente valido");
        break;
}
