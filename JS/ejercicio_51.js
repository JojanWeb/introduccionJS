// 51. Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede
// los $130.000 el descuento será del 15%, de lo contrario no hay descuento.

import { pedirDato } from "../funciones.js";

let total = 0, valor;
do {
    valor = pedirDato(`Ingrese el pago (ingrese 0 si ha terminado de ingresar los pagos): `,"int");
    total += valor;
} while (valor != 0);

if (total > 130000) {
    alert(`Tendra un descuento del 15%, total = ${total * 0.15}`);
} else {
    alert(`No hay descuento, Total = ${total}`);
}