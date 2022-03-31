//1. Escreva uma função soma que retorna a soma dos números de um array usando spread operator

const numeros = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];
const soma = (numeros) => {
  let arrayNumeros = [...numeros].reduce((acc, soma) => acc + soma);
  return arrayNumeros;
};
