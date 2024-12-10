// 70. Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
// pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta.

import { pedirDato } from "../funciones.js";

const validarContraseña = (correcta, usuario) => {
  if (correcta === usuario) {
    return true;
  }
  return false;
};

while (true) {
  const contraseña = pedirDato(`Ingrese la contraseña: `, "string");
  if (validarContraseña("contraseña", contraseña)) {
    alert("Contraseña CORRECTA");
    break;
  } else {
    alert("Contraseña INCORRECTA");
  }
}
