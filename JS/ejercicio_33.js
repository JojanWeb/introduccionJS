// 33. Calcular la edad de una madre en el momento que dio a luz a alguno de sus hijos.

import { pedirDato } from "../funciones.js";

const edadMadre = pedirDato("Ingrese la edad de la madre", "int");
const edadHijo = pedirDato("Ingrese la edad de uno de sus hijos", "int");

const hallarEdad = (madre, hijo) => madre - hijo;

alert(
  `La madre actualmente tiene ${edadMadre} años y tiene un hijo de ${edadHijo} años, lo que significa que la edad de la madre al momento de dar a luz al hijo era de ${hallarEdad(
    edadMadre,
    edadHijo
  )} años`
);
