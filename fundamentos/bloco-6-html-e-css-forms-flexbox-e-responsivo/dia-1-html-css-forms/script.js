const estado = document.querySelector('#estado');

let todosEstados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

for (let index = 0; index < 27; index += 1) {
  let estados = document.createElement('option')
  estado.appendChild(estados).innerText = todosEstados[index];
}


// function verificaData(data){
//   const pegarData = document.getElementById('data').value;

//   if(pegarData  == "" ){
//     alert('Campo data em branco');
//   }
  
//   let split = pegarData.split('/');
//   let dia = split[0];
//   let mes = split[1];
//   let ano = split[2];

//   if(dia < 0 || dia > 31){
//     alert("Esse dia ainda nao existe")
//   }
//   if(mes < 0 || mes > 12){
//     alert("Esse mês ainda nao existe")
//   }
//   if(ano < 0 ){
//     alert("O ano não pode ser negativo")
//   }
// }


  

  
