// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. 
// Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

let angulo1 = 50;
let angulo2 = 70;
let angulo3 = 60;

angulosTriangulo = angulo1 + angulo2 + angulo3;
triangulo = false;


 

if(angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
  console.log("Angulo inválido.");
}else if(angulosTriangulo === 180){
  triangulo = true;
  console.log("triangulo ?"+triangulo);
}else{
    triangulo = false;
    console.log("triangulo ? "+triangulo);
}
