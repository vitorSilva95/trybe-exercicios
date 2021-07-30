const compararNumero = (numero , numeroSorteado) => numero === numeroSorteado;

const resultadoLoteria = (numero, callback)=> {
  const numeroSorteado = Math.floor((Math.random()*5)+1);
  if (callback(numero, numeroSorteado)) {
  return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
}

console.log(resultadoLoteria(2,compararNumero));