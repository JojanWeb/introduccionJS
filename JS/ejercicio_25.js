// 25. Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un programa
// que ingresando el costo de los medicamentos calcule el descuento y el precio final

import { pedirDato } from "../funciones.js";

const calcularDescuento = (precio, descuento = 0.1) => precio * descuento;

const precio = pedirDato("Ingrese el precio del medicamento: ", "float");
const sumar = (precio) => calcularDescuento(precio) + precio;

alert(`El precio del remedio es de: ${precio}
  El valor del descuento es de ${calcularDescuento(precio)}
  El precio final es de: ${sumar(precio)}`);
