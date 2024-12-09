// 30. Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener entre 8 y 12
// caracteres, y al menos una mayúscula, una minúscula, y un dígito

import { pedirDato } from "../funciones.js";

let requisito = /^[A-Za-z0-9]{8,12}$/;
const contraseña = pedirDato("Ingrese la contraseña: ", "string");

const comprobarPasswd = (requisito, contraseña) => requisito.test(contraseña);

if (comprobarPasswd(requisito, contraseña)) {
  alert("La contraseña SI cumple con los requisitos");
} else {
  alert("La contraseña NO cumple con los requisitos");
}
