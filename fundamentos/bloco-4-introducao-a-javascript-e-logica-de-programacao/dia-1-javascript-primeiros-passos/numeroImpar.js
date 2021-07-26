// Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar.
//  Caso contrário, ele retorna false .
//  Bonus: use somente um if .


let numero1 = 6;
let numero2 = 2;
let numero3 = 9;

if (numero1 % 2 !== 0 || numero2 % 2 !==0 || numero3 % 2 !==0) {
  return console.log(true);
}else{
  return console.log(false);
}
