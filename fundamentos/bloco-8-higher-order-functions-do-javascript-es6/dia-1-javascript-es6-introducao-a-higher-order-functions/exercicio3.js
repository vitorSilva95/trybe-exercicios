const RIGHT_ANSWERS =   ['A', 'C'   , 'B', 'D', 'A', 'A', 'D'   , 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A' , 'B', 'D', 'A', 'C', 'N.A' , 'A', 'D', 'B'];
const STUDENT_NERD =  ['A', 'C'   , 'B', 'D', 'A', 'A', 'D'   , 'A', 'D', 'C'];
const verificaPontuacao = (parametro1,parametro2) => {
  let count = 0;
  for (let index = 0; index < parametro2.length; index++) {
    if (parametro1[index] === 'N.A') {
      count = count + 0;
    }else if (parametro1[index] === parametro2[index]) {
      count = count + 1;
    }else
    count = count -0.5;
  }
  return count;
}

const resultado = (parametro1,parametro2,callback) => {
  if (callback(parametro1,parametro2) < 6) {
    return `Abaixo da media. Pontuação ${callback(parametro1,parametro2)} de ${parametro2.length}`
  }
  if (callback(parametro1,parametro2) === 6) {
    return `Na media. Pontuação ${callback(parametro1,parametro2)} de ${parametro2.length}`
  }
  return `Acima da media. Pontuação ${callback(parametro1,parametro2)} de ${parametro2.length}`
}

console.log(resultado(STUDENT_NERD,RIGHT_ANSWERS,verificaPontuacao));