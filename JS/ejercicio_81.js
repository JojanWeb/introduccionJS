// • Crea una función de nos devuelva el elemento mayor de un arreglo de números.

const numeros = [10, 5, 20, 8];

const numeroMayor = (numeros) => {
  let numeroMayor = numeros[0];

  for (const numero of numeros) {
    if (numero > numeroMayor) {
      numeroMayor = numero;
    }
  }
  return numeroMayor;
};

console.log(`El número mayor es: ${numeroMayor(numeros)}`);
