// Faça um programa que retorne o maior de três números. Defina 
// no começo do programa três variáveis com os valores que serão comparados.

let numero1 = 30;
let numero2 = 70;
let numero3 = 100;

let maiorNumero;

if (numero1>numero2 && numero1>numero3) {
  maiorNumero = numero1;
}else if(numero3>numero1 && numero3+numero2){
  maiorNumero = numero3;
}else {
  maiorNumero = numero2;
}

console.log("O maior numero entre "+numero1+" , "+numero3+ " e "+numero2+" é = " + maiorNumero)