// 50. Considere dos variables llamadas temperatura y presión. Escriba una sentencia if-else que
// muestre en pantalla la palabra Alarma si la variable presión es mayor a 200 o si la variable
// temperatura es mayor a 100. En caso contrario, se debe mostrar en pantalla la palabra
// Normal.

import { pedirDato } from "../funciones.js";
        
const temperatura = pedirDato(`Ingresa la temperatura: `,"int");
const presion = pedirDato(`Ingresa la presion: `,"int");

if (presion > 200 || temperatura > 100) {
    alert("Alarma");
} else {
    alert("Normal");
}
