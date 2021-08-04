const books = require('./data');
const assert = require('assert');

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  const today = new Date();
  const currentYear = today.getFullYear();
  return books.filter((book)=> currentYear - book.releaseYear > 60).map((book)=>book.name);
}
console.log (oldBooks());
assert.deepStrictEqual(oldBooks(), expectedResult);