// Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, 
// "negative" se for negativo e "zero" caso contrário.

let num = -0.5;
let resultado;

if (num >0) {
  resultado = "Positivo";
} else if (num < 0) {
  resultado = "Negativo";
} else {
  resultado = "0"
}

console.log("O numero é "+resultado);