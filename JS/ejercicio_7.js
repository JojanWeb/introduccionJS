// 7. los tramos impositivos para la declaración de la renta en un determinado país son:
// a. entre 10000 y 20000 ---- 5%
// b. entre 20000 y 35000 ---- 10%
// c. entre 35000 y 60000 ---- 20%
// d. más de 60000 ---- 45%

import { pedirDato } from "../funciones.js";

const rentaAnual = (monto) => {
  console.log(typeof monto);

  if (monto >= 10000 && monto <= 20000) {
    return "5%";
  } else if (monto > 20000 && monto <= 35000) {
    return "10%";
  } else if (monto > 35000 && monto <= 60000) {
    return "20%";
  } else if (monto > 60000) {
    return "45%";
  } else {
    return "No aplica";
  }
};

let monto;
do {
  monto = pedirDato("Ingrese monto: ", "int");
} while (typeof monto == "string");

alert(rentaAnual(monto));
