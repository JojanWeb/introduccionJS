// 58. Se desea realizar una aplicación que ingrese el nombre del mes y mostrar que signo
// zodiacal pertenece, para ello usar if_else anidados.

import { pedirDato } from "../funciones.js";

const mes = pedirDato(`Ingrese el mes: `,"string");
const dia = pedirDato(`Ingrese el dia: `,"string");

if ((mes === "marzo" && dia > 20) || (mes === "abril" && dia < 20)) {
    alert("Zigno zodiacal: Aries");
}else if ((mes === "abril" && dia > 19) || (mes === "mayo" && dia < 21)) {
    alert("Zigno zodiacal: Tauro");
}else if ((mes === "mayo" && dia > 20) || (mes === "junio" && dia < 21)) {
    alert("Zigno zodiacal: Geminis");
}else if ((mes === "junio" && dia > 20) || (mes === "julio" && dia < 23)) {
    alert("Zigno zodiacal: Cancer");
}else if ((mes === "julio" && dia > 22) || (mes === "agosto" && dia < 23)) {
    alert("Zigno zodiacal: Leo");
}else if ((mes === "agosto" && dia > 22) || (mes === "septiembre" && dia < 23)) {
    alert("Zigno zodiacal:  Virgo");
}else if ((mes === "septiembre" && dia > 22) || (mes === "octubre" && dia < 23)) {
    alert("Zigno zodiacal: Libra");
}else if ((mes === "obtubre" && dia > 22) || (mes === "noviembre" && dia < 22)) {
    alert("Zigno zodiacal: Escorpio");
}else if ((mes === "noviembre" && dia > 21) || (mes === "diciembre" && dia < 22)) {
    alert("Zigno zodiacal: Sagitario");
}else if ((mes === "diciembre" && dia > 21) || (mes === "enero" && dia < 20)) {
    alert("Zigno zodiacal: Capricornio");
}else if ((mes === "enero" && dia > 19) || (mes === "febrero" && dia < 19)) {
    alert("Zigno zodiacal: Acuario");
}else if ((mes === "febrero" && dia > 18) || (mes === "marzo" && dia < 21)) {
    alert("Zigno zodiacal: Piscis");
}else{
    alert("FECHA INVALIDA");
}
