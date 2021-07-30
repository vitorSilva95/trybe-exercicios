// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer 
// que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
const array = ['js','css','git','html','resiliencia'];

const findX = (string,frase) => frase.replace(/x/gi, string);

const concatenar = Function (findX(string,frase)){
  let concaternarString = `${findX()} Minhas cinco principais habilidades são:
  ${array}`;
  return concaternarString;
}
console.log(findX('Bebeto','Tryber x aqui!'));
console.log(concatenar());