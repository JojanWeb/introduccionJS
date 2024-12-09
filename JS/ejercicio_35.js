// 35. Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada
// uno por $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000.
// Después de pagar le sobran $91000. ¿Cuánto dinero tenía?

import { pedirDato } from "../funciones.js";

const llave = pedirDato(
  "Valor unitario de juego de llaves hexagonales: ",
  "float"
);
const bomba = pedirDato("Ingrese el valor de la bomba: ", "float");
const pernos = pedirDato(
  "Ingrese el valor unitario de la caja de pernos: ",
  "float"
);
const dineroSobrante = pedirDato("Ingrese el dinero que le sobro: ", "float");

const hallarDinero = (valor1, valor2, valor3, sobrante) =>
  valor1 * 5 + valor2 + valor3 * 3 + sobrante;

alert(
  `El dinero que tenia un total de: ${hallarDinero(
    llave,
    bomba,
    pernos,
    dineroSobrante
  )}`
);
