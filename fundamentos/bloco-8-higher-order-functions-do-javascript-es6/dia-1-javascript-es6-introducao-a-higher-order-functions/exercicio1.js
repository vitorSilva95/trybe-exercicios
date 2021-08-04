

const employees = (name) => {
  const email = name.toLowerCase().split(' ').join('_');
  return { nome: name,
  email: `${email}@trybe.com`,
}};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
console.log(newEmployees(employees));