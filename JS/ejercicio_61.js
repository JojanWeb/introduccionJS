// 61. Hacer un programa que permita ingresar n Notas de alumnos (100 – 1), y que imprima cual
// fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima nota de 100, cuantos
// obtuvieron las siguientes calificaciones:
// a. «a» = menor que 100 y mayor igual que 90
// b. «b» = menor que 90 y mayor igual que 80
// c. «c» = menor que 80 y mayor igual que 70
// d. «d» = menor que 70 y mayor igual que 60

import { pedirDato } from "../funciones.js";

const numeroMayor = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    }
    return num2;
}

const numeroMenor = (num1, num2) => {
    if (num1 < num2) {
        return num1;
    }
    return num2;
}

const notaMax = (nota) => {
    if (nota === 100) {
        return 1;
    }
    return 0;
}

const clasificar = (nota) => {
    if (nota < 100 || nota >= 90) {
        return "a";
    }else if (nota < 90 || nota >= 80) {
        return "b";
    }else if (nota < 80 || nota >= 70) {
        return "c";
    }else if (nota < 700 || nota >= 90) {
        return "d";
    }
}

let menor = 101, mayor = 0, maximo = 0, clasiNota, a = 0, b = 0, c = 0, d = 0;

while (true) {
    const nota = pedirDato(`Ingrese el valor de la nota o (101 para salir): `,"int");
    if (nota === 101) {
        break;
    }
    mayor = numeroMayor(mayor, nota);
    menor = numeroMenor(nota, menor);
    maximo += notaMax(nota);
    clasiNota = clasificar(nota);
    if (clasiNota === "a") {
        a += 1;
    }else if (clasiNota === "b") {
        b += 1;
    }else if (clasiNota === "c"){
        c += 1;
    }else if (clasiNota === "d") {
        d += 1;
    }
}

alert(`La nota mas alta fue: ${mayor}
    La nota mas baja fue: ${menor}
    La cantidad de notas maximas fue: ${maximo}
    Cantidad de notas clasificadas como "a": ${a}
    Cantidad de notas clasificadas como "b": ${b}
    Cantidad de notas clasificadas como "c": ${c}
    Cantidad de notas clasificadas como "d": ${d}`)
