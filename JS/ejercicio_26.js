// 26. Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit.

import { pedirDato } from "../funciones.js";

const gradosFahrenheit = (grados) => grados * (9 / 5) + 32;

const grados = pedirDato("Ingrese los grados centigrados: ", "float");

alert(`Grados centigrados ${grados}° 
  Convertidos a Fahrenheit: ${gradosFahrenheit(grados)}`);
