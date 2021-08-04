// Crie uma função que receba uma frase e retorne qual a maior palavra.


const longestWord = frase => {
  let maior = '';
  const splitFrase = frase.split(' ');
  console.log(splitFrase);
  for (let index = 0; index < splitFrase.length; index += 1) {
    if (maior.length < splitFrase[index].length) {
      maior = splitFrase[index]
    }
  }
  return maior;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))// retorna 'aconteceu'