// Escreva um programa que defina três números em variáveis e retorne true 
// se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

let numero1 = 5;
let numero2 = 3;
let numero3 = 2;

if (numero1 % 2 ===0 || numero2 % 2 ===0 || numero3 % 2 ===0) {
  return console.log(true);
}else{
  return console.log(false);
}
