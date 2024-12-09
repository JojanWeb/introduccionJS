// 44. Realice el siguiente algoritmo para convertir pesos a dolores y a euros, utilizando como
// constante el valor de una moneda.

import { pedirDato, dividir } from "../funciones.js";

const pesos = pedirDato(`Ingresa la cantidad de pesos colombianos: `,"float");

const dolar = 4410;
const euro = 4658;

alert(`Pesos colombianos convertidos a dolares:
    Pesos: ${pesos} = Dolares: ${dividir(pesos, dolar).toFixed(2)}
    Pesos colombianos convertidos a euros:
    Pesos: ${pesos} = Euros: ${dividir(pesos, euro).toFixed(2)}`);
