// 53. Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados
// de: Iva, Subtotal y Total de la compra de los artículos.

import { pedirDato } from "../funciones.js";

let valorTotal = 0, ivaTotal = 0;
for (let i = 0; i < 5; i++) {
    const valor = pedirDato(`Ingrese el valor del producto N°${i+1} `,"float");
    const iva = pedirDato(`Ingrese el iva en porcentaje`,"float");
    valorTotal += valor;
    ivaTotal += valor * (iva / 100);
}

alert(`Subtotal = ${valorTotal}
     Valor total del IVA = ${ivaTotal}
     Total = ${valorTotal + ivaTotal}`);
