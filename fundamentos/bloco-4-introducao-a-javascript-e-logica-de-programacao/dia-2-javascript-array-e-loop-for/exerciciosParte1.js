let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let maiorValorDoArray = 0;
let menorValorDoArray = 10000;
let impares = 0;

for (let i = 0; i < numbers.length; i += 1) {
  // Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
 console.log(numbers[i]);
 // Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
 soma += numbers[i];
 // Pegando o maior valor do Array;
 if(numbers[i] > maiorValorDoArray){
   maiorValorDoArray = numbers[i];
 }
 //Pegando a quantidade de numero impar do array;
 if(numbers[i] % 2 !== 0){
   impares += 1;
 }
 //Pegando o menor valor do array;
 if(numbers[i] < menorValorDoArray){
   menorValorDoArray = numbers[i];
 }
 
}
// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
console.log("Soma de todos os números do array : "+soma);
// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let media = (soma/numbers.length)
console.log("Media Aritimetica do array : "+media);
// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem:
// "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if(media > 20){
  console.log('valor maior que 20');
}else{
  console.log('valor menor que 20');
}
// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
console.log("Maior valor do array : "+maiorValorDoArray);
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
if(impares === 0){
  console.log('nenhum valor ímpar encontrado')
}else{
  console.log('Quantidade de numeros impares no array : '+impares);
}

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;
console.log('Menor valor do Array : '+menorValorDoArray);






