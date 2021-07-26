// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas 
// quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)



let pecaXadrez = "XABLAU";


let pecaXadrezToLowerCase = pecaXadrez.toLowerCase();

switch (pecaXadrezToLowerCase) {
  case "cavalo":
     console.log(pecaXadrezToLowerCase+" = Movimento em L");
    break;
  case "bispo":
     console.log(pecaXadrezToLowerCase+" = Movimento em Diagonais")
     break;
  case "rainha":
    console.log(pecaXadrezToLowerCase+" = paralelas (linhas ou colunas) e diagonais,")
    break;
    case "peao":
      console.log(pecaXadrezToLowerCase+" = primeira jogada movimenta 2 ou 1 casa / após somente 1 casa")
     break;
   case "torre":
      console.log(pecaXadrezToLowerCase+" = paralelas (linhas ou colunas)")
      break;
   case "rei":
     console.log(pecaXadrezToLowerCase+" = Movimento para qualquer casa ao redor")
     break;
  default:
    console.log(pecaXadrezToLowerCase+" = Essa peça nao existe")
    break;
}

