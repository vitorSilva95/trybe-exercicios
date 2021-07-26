const estado = document.querySelector('#estado');

let todosEstados = ["Selecionar Estado","AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

for (let index = 0; index < 28; index += 1) {
  let estados = document.createElement('option')
  estado.appendChild(estados).innerText = todosEstados[index];
}

function verificaData(){ 
  const pegarData = document.getElementById('data').value;

  if(pegarData  == "" ){
    alert('Campo data em branco');
  }
  
  let formatoValido =  /^\d\d\/\d\d\/\d\d\d\d$/;

  if (!formatoValido.test(pegarData)) {
    alert("Formato da data invalido");
  }

  let split = pegarData.split('/');
  let dia = split[0];
  let mes = split[1];
  let ano = split[2];

  if(dia < 0 || dia > 31){
    alert("Esse dia ainda nao existe")
  }
  if(mes < 0 || mes > 12){
    alert("Esse mês ainda nao existe")
  }
  if(ano < 0 ){
    alert("O ano não pode ser negativo")
  }
}
function limparHtml (){
  document.innerHtml = '';
}

function botaoEnviar (event){
  event.preventDefault();
  let saidaDados = document.querySelector('#saidaDados');
  let name = document.querySelector('#name').value;
  let cpf = document.querySelector('#cpf').value;
  let email = document.querySelector('#email').value;
  let endereco = document.querySelector('#endereco').value;
  let cidade = document.querySelector('#cidade').value;
  let estado = document.querySelector('#estado').value;


  saidaDados.innerText = "Dados do formulário " + '\n' +'\n' + "Nome : "+ name + '\n' + "CPF : "+ cpf +'\n'+"Email : "+ email +'\n'+"cidade : "+ cidade +'\n'+"Endereço : "+ endereco +'\n'+"Estado : "+estado;

  verificaData();
}

let buttonEnviar = document.getElementById('enviar');
buttonEnviar.addEventListener('click', botaoEnviar);
let buttonLimpar = document.getElementById('limpar').addEventListener('click', limparHtml);