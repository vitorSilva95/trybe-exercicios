// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 0;
let notaConvertida = "";

if (nota >=90 && nota <=100) {
   notaConvertida = "A";
}else if (nota >= 80 && nota < 90){
   notaConvertida = "B";
}else if (nota >= 70 && nota < 80){
  notaConvertida = "C";
}else if (nota >= 60 && nota < 70){
  notaConvertida = "D";
}else if (nota >= 50 && nota < 60){
  notaConvertida = "E";
}else if (nota < 50 && nota >=0){
  notaConvertida = "F";
}else {
  notaConvertida ="Erro : nota inválida";
}

console.log(nota +" = "+ notaConvertida);



 