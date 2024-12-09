// 55. En una tienda de HELADO da un descuento por compra a sus clientes con membresía
// dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los
// descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo C
// 20% de descuento.

import { pedirDato } from "../funciones.js";
    
const membresia = pedirDato(`Ingrese su membresia:
    Membresia (A)
    Membresia (B)
    Membresia (C) `,"string");
const valor = pedirDato(`Ingrese el valor total de la compra: `,"float");

switch (membresia) {
    case "A":
        alert(`Tiene un descuento del 10%
            El total de la compra con el descuento es de: ${valor - (valor * 0.1)}`);
        break;
    case "B":
        alert(`Tiene un descuento del 15%
            El total de la compra con el descuento es de: ${valor - (valor * 0.15)}`);
        break;
    case "C":
        alert(`Tiene un descuento del 20%
            El total de la compra con el descuento es de: ${valor - (valor * 0.2)}`);
        break;
    default:
        alert(`Membresia INVALIDA`);
        break;
}