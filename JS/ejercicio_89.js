// • Escribe una función que genere de forma aleatoria un numero entre 1 y 10, y verifica si
// este número es par o impar.

const numAleatorio = () => Math.floor(Math.random() * 10) + 1;

const esPar = (numero) => {
  if (numero % 2 === 0) return true;
  return false;
};

const numero = numAleatorio();

if (esPar(numero)) alert(`El numero aleatorio "${numero}" es "PAR"`);
else alert(`El numero aleatorio "${numero}" es "IMPAR"`);
