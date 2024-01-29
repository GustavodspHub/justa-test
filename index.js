/*
Observações:

Para rodar esse script, é necessário ter o NodeJS instalado em sua máquina

Basta usar o seguinte comando no terminal para rodar o script:

node index
*/

const findIntersections = (lists) => {
  // Neste trecho de código, eu pego o array que recebo como parâmetro, separo ele em 2 arrays usando a "," como delimitador, e mapeio as strings para transforma-las em numbers
  const listOne = lists[0].split(", ").map(Number);
  const listTwo = lists[1].split(", ").map(Number);

  // Faço a inicialização dos indices para percorrer os array dentro do while
  let indexOne = 0;
  let indexTwo = 0;

  // Declaro o array onde irei inserir as interseções
  const intersections = [];

  // Percorro os arrays usando a estrutura "While", enquanto houver valores em ambos
  while (indexOne < listOne.length && indexTwo < listTwo.length) {
    // Valido se os números atuais são iguais
    if (listOne[indexOne] === listTwo[indexTwo]) {
      // Caso os números sejam iguais, eu insiro o número dentro do Array "intersections" que foi declarado anteriormente
      intersections.push(listOne[indexOne]);
      indexOne++;
      indexTwo++;
      continue;
    }

    // Valido se o elemento da lista 1 é menor que o elemento da lista 2
    if (listOne[indexOne] < listTwo[indexTwo]) {
      // Caso o elemento da lista 1 seja menor, eu avanço dentro do array da lista 2
      indexOne++;
      continue;
    }

    // Se não entrar nas duas primeiras condições, isso significa que o elemento da lista 2 é menor que o elemento da lista 1, portanto, eu avanço dentro do array da lista 2

    indexTwo++;
  }

  // Eu realizo a concatenação dos valores do Array, transformando em string, e separo os valores por ","
  return intersections.join(",");
};

console.log(findIntersections(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
console.log(findIntersections(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]));
