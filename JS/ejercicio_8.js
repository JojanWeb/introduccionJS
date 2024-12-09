// 8. En una determinada empresa, sus empleados son evaluados al final de cada año. Los
// puntos que pueden obtener en la evaluación comienzan en 0.0 y pueden ir aumentando,
// traduciéndose en mejores beneficios. Los puntos que pueden conseguir los empleados
// pueden ser 0.0, 0.4, 0.6 o más, pero no valores intermedios entre las cifras mencionadas.
// A continuación, se muestra una tabla con los niveles correspondientes a cada puntuación.
// a. La cantidad de dinero conseguida en cada nivel es de 2.400€ multiplicada por la
// puntuación del nivel.
// b. Nivel Puntuación Inaceptable 0.0 Aceptable 0.4 Meritorio 0.6 o más
// Escribir un programa que lea la puntuación del usuario e indique su nivel de rendimiento,
// así como la cantidad de dinero que recibirá el usuario.

import { pedirDato } from "../funciones.js";

const rendimiento = (puntuacion) => {
  if (puntuacion === 0.0) {
    return [2400, "Inaceptable"]; // Devuelve un array con los valores
  } else if (puntuacion === 0.4) {
    return [2400 + 2400 * 0.4, "Aceptable"];
  } else if (puntuacion >= 0.6) {
    return [2400 + 2400 * 0.6, "Meritorio"];
  } else {
    return false; // Retorna false si la puntuación no es válida
  }
};

let puntuacion;
do {
  puntuacion = pedirDato("Ingrese la puntuacion", "float");
} while (rendimiento(puntuacion) === false);

const [dinero, nivel] = rendimiento(puntuacion);

alert(`Su nivel es ${nivel} y la cantidad de dinero que recibira es ${dinero}`);
