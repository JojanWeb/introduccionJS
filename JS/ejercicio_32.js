// 32. Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un
// 2% de descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada
// producto y el total de la compra.

import { pedirDato } from "../funciones.js";

const precio1 = pedirDato("Ingrese el precio del producto 1 ", "float");
const precio2 = pedirDato("Ingrese el precio del producto 2 ", "float");
const precio3 = pedirDato("Ingrese el precio del producto 3 ", "float");
const precio4 = pedirDato("Ingrese el precio del producto 4 ", "float");
const precio5 = pedirDato("Ingrese el precio del producto 5 ", "float");

const descuento = (precio, descuento) => precio * descuento;

let total1 = descuento(precio1, 0.05) + precio1;
let total2 = descuento(precio2, 0.05) + precio2;
let total4 = descuento(precio4, 0.02) + precio4;
let total5 = descuento(precio5, 0.02) + precio5;

let totalProductos = total1 + total2 + precio3 + total4 + total5;

alert(`Valor a pagar del producto 1: ${total1}
  Valor a pagar del producto 2: ${total2}
  Valor a pagar del producto 3: ${precio3}
  Valor a pagar del producto 4: ${total4}
  Valor a pagar del producto 5: ${total5}
  El total de la compra fue de: ${totalProductos}`);
