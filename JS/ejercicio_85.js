// • Obtén una serie de número y devuelve la suma de todos los números positivos, si no
// tenemos números positivos la sume debe devolver 0.

const sumarPositivos = (numeros) => {
  let suma = 0;
  numeros.forEach((numero) => {
    if (numero > 0) suma += numero;
  });
  return suma === 0 ? 0 : suma;
};

const numeros = [1, 2, 3, 4, 5, 6, 7, 9];

alert(`La suma de los numeros positivos es: ${sumarPositivos(numeros)}`);
