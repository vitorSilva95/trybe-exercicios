const books = require('./data');
const assert = require('assert');

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  const book = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
  const bookAuthorName = book.map((object)=> object.author.name).sort();
  return bookAuthorName;
}
console.log(fantasyOrScienceFictionAuthors());
assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);